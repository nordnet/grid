import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Row from './';

test(`default tag`, t => {
  const component = shallow(<Row />).shallow();
  const actual = component.type();
  const expected = 'div';
  t.is(actual, expected, `should be "div" by default`);
});
