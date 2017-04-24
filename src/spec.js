import { theme } from 'nordnet-ui-kit';

export const { breakpoints } = theme;
export const { media } = theme.mixins;

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
