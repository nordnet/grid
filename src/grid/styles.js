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
  console.log({ a: media(breakpoint), b: breakpoint });
  styles.grid[media(breakpoint)] = {
    width: breakpoint === 'xs' ? '100%' : containers[breakpoint],
  };
});

console.log(styles);

export default styles;
