import { media, gutter, columns, breakpoints } from '../spec';

const range = (x, firstIndex) =>
  new Array(x).fill('').map((_, i) => i + firstIndex);

const styles = {
  col: {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    paddingRight: gutter / 2,
    paddingLeft: gutter / 2,
  },
  reverse: {
    'flex-direction': 'column-reverse',
  },
};
const _size = i => Number((100 / columns) * i).toFixed(4);

const helpers = {
  basic: {
    'flex-grow': 1,
    'flex-basis': 0,
    'max-width': '100%',
  },
  size: i => ({
    'flex-basis': `${_size(i)}%`,
    'max-width': `${_size(i)}%`,
  }),
  offset: i => ({
    'margin-left': `${_size(i)}%`,
  }),
  first: {
    order: '-1',
  },
  last: {
    order: '1',
  },
};

Object.keys(breakpoints).forEach(breakpoint => {
  Object.keys(helpers)
    .map(key => ({ key, helper: helpers[key] }))
    .forEach(({ key, helper }) => {
      if (key === 'size' || key === 'offset') {
        range(columns, key === 'size' ? 1 : 0).forEach(colIndex => {
          styles[`${breakpoint}-${key}-${colIndex}`] = {
            [media(breakpoint)]: helper(colIndex),
          };
        });
      } else {
        const sKey = key === 'basic' ? breakpoint : `${breakpoint}-${key}`;
        styles[sKey] = { [media(breakpoint)]: helper };
      }
    });
});

styles.noPadding = {
  padding: 0,
};

export default styles;
