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

export const offsets = {
  // Used for Grid's outer padding
  xs: 12,
  sm: 24,
  md: 28,
  lg: 96,
  xl: 40,
};

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
