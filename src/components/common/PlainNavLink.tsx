import React, { HTMLProps, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

type PlainNavLinkProps = HTMLProps<HTMLAnchorElement> & {
  to: string;
  isActive?: boolean;
};

const PlainNavLink: React.FC<PlainNavLinkProps> = ({
  to,
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
