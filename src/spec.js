export const columns = 12;

export const gutter = '2rem';

export const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: '48em',
  md: '62em',
  lg: '75em',
};

export const containers = {
  xs: false,
  sm: '46rem',
  md: '61rem',
  lg: '71rem',
};

export const media = {
  xs: `@media only screen and (min-width: ${breakpoints.xs})`,
  sm: `@media only screen and (min-width: ${breakpoints.sm})`,
  md: `@media only screen and (min-width: ${breakpoints.md})`,
  lg: `@media only screen and (min-width: ${breakpoints.lg})`,
};

export default {
  columns,
  gutter,
  breakpoints,
  containers,
};
