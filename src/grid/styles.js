import { gutter, media, breakpoints, containers } from '../spec';

const styles = {
  grid: {
    margin: '0 auto',
  },
  gridFluid: {
    margin: '0 auto',
    paddingRight: gutter,
    paddingLeft: gutter,
  },
};

Object.keys(breakpoints).forEach(breakpoint => {
  styles.grid[media(breakpoint)] = {
    width: breakpoint === 'xs' ? '100%' : containers[breakpoint],
  };
});

export default styles;
