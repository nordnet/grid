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
  if (breakpoint === 'xs') {
    return;
  }

  styles.grid[media[breakpoint]] = {
    width: containers[breakpoint],
  };
});

export default styles;
