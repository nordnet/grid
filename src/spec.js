export const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 768,
  md: 992,
  lg: 1440,
  xl: 1680,
};

export const media = size => {
  const breakpoint = breakpoints[size];

  if (breakpoint) {
    return `@media only screen and (min-width: ${breakpoints[size]}px)`;
  }

  return '&';
};

export const columns = 12;

export const gutter = 20;

export const containers = {
  xs: false,
  sm: 720,
  md: 936,
  lg: 1252,
  xl: 1600,
};

export default {
  columns,
  gutter,
  breakpoints,
  containers,
};
