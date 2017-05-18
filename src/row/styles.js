import { gutter, media, breakpoints } from '../spec';

const styles = {
  row: {
    'box-sizing': 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
  },
  reverse: {
    'flex-direction': 'row-reverse',
  },
};

const helpers = {
  start: {
    'justify-content': 'flex-start',
    'text-align': 'start',
  },
  center: {
    'justify-content': 'center',
    'text-align': 'center',
  },
  end: {
    'justify-content': 'flex-end',
    'text-align': 'end',
  },
  top: { 'align-items': 'flex-start' },
  middle: { 'align-items': 'center' },
  bottom: { 'align-items': 'flex-end' },
  around: { 'justify-content': 'space-around' },
  between: { 'justify-content': 'space-between' },
};

Object.keys(breakpoints).forEach(breakpoint => {
  Object.keys(helpers)
    .map(key => ({ key, helper: helpers[key] }))
    .forEach(({ key, helper }) => {
      styles[`${breakpoint}-${key}`] = {
        [media[breakpoint]]: helper,
      };
    });
});

export default styles;
