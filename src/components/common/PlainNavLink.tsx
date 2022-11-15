import React, { HTMLProps, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

type PlainNavLinkProps = HTMLProps<HTMLAnchorElement> & {
  to: string;
  activeClassName?: string;
  activeStyle?: CSSProperties;
  isActive?: boolean;
};

const PlainNavLink: React.FC<PlainNavLinkProps> = ({
  to,
  activeClassName,
  activeStyle,
  isActive,
  className,
  children,
  style,
  onClick,
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClassName : className)}
      style={({ isActive }) => (isActive ? activeStyle : style)}
      onClick={onClick}
      {...htmlProps}
    >
      {children}
    </NavLink>
  );
};

export default PlainNavLink;
