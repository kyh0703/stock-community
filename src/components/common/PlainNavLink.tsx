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
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClassName : className)}
      style={({ isActive }) => (isActive ? activeStyle : style)}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLAnchorElement).blur();
      }}
      {...htmlProps}
    >
      {children}
    </NavLink>
  );
};

export default PlainNavLink;
