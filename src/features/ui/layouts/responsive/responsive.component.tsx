import React from 'react';

import { ResponsiveContainer } from './responsive.styles';

const Responsive: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  ...rest
}) => {
  return <ResponsiveContainer {...rest}>{children}</ResponsiveContainer>;
};

export default Responsive;
