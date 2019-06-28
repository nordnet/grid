import { media, breakpoints, containers, offsets } from '../spec';

const styles = {
  grid: {
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  gridFluid: {
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  noPadding: {
    padding: 0,
  },
};

Object.keys(breakpoints).forEach(breakpoint => {
  if (breakpoint === 'xs') {
    styles.grid[media(breakpoint)] = {
      width: '100%',
    };
  } else {
    styles.grid[media(breakpoint)] = {
      width: containers[breakpoint],
      padding: [0, offsets[breakpoint]],
    };
  }
});

export default styles;
