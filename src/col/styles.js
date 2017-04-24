import { media, gutter, columns, breakpoints } from '../spec';

const range = x => new Array(x).fill('').map((_, i) => i + 1);

const styles = {
  col: {
    'box-sizing': 'border-box',
    flex: '0 0 auto',
    'padding-right': `${gutter.replace(/rem/, '') / 4}rem`,
    'padding-left': `${gutter.replace(/rem/, '') / 4}rem`,
  },
  reverse: {
    'flex-direction': 'column-reverse',
  },
};
const _size = i => Number(100 / columns * i).toFixed(4);

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
        range(columns).forEach(colIndex => {
          styles[`${breakpoint}-${key}-${colIndex}`] = breakpoint === 'xs'
            ? helper(colIndex)
            : { [media[breakpoint]]: helper(colIndex) };
        });
      } else {
        const sKey = key === 'basic' ? breakpoint : `${breakpoint}-${key}`;
        const sValue = breakpoint === 'xs'
          ? helper
          : { [media[breakpoint]]: helper };
        styles[sKey] = sValue;
      }
    });
});

export default styles;
