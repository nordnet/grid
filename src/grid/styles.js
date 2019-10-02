import { media, breakpoints, containers } from '../spec';

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
      maxWidth: containers[breakpoint],
      padding: [0, 20],
    };
  }
});

export default styles;
