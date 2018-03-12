export const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 768,
  md: 992,
  lg: 1300,
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
  sm: breakpoints.sm - 30,
  md: breakpoints.md - 30,
  lg: breakpoints.lg - 30,
};

export default {
  columns,
  gutter,
  breakpoints,
  containers,
};
