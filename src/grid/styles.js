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
  styles.grid[media(breakpoint)] = {
    maxWidth: containers[breakpoint],
    padding: [0, offsets[breakpoint]],
  };
});

export default styles;
