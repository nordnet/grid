export const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 760,
  md: 976,
  lg: 1280,
  xl: 1600,
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
  sm: breakpoints.sm,
  md: breakpoints.md,
  lg: breakpoints.lg,
  xl: breakpoints.xl,
};

export default {
  columns,
  gutter,
  breakpoints,
  containers,
};
