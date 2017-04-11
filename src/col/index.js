import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import isNumber from 'lodash.isnumber';

import styles from './styles';

function Col({
  classes,
  className: classNameCustom,
  children,
  componentClass: ComponentClass,

  reverse,
  xs, sm, md, lg,
  xsOffset, smOffset, mdOffset, lgOffset,
  xsFirst, smFirst, mdFirst, lgFirst,
  xsLast, smLast, mdLast, lgLast,
}) {
  const className = cn({
    [classes.col]: true,
    [classes.reverse]: reverse,

    [classes[isNumber(xs) ? `xs-size-${xs}` : `xs`]]: xs >= 0,
    [classes[isNumber(sm) ? `sm-size-${sm}` : `sm`]]: sm >= 0,
    [classes[isNumber(md) ? `md-size-${md}` : `md`]]: md >= 0,
    [classes[isNumber(lg) ? `lg-size-${lg}` : `lg`]]: lg >= 0,

    [classes[`xs-offset-${xsOffset}`]]: xsOffset >= 0,
    [classes[`sm-offset-${smOffset}`]]: smOffset >= 0,
    [classes[`md-offset-${mdOffset}`]]: mdOffset >= 0,
    [classes[`lg-offset-${lgOffset}`]]: lgOffset >= 0,

    [classes['xs-first']]: xsFirst,
    [classes['sm-first']]: smFirst,
    [classes['md-first']]: mdFirst,
    [classes['lg-first']]: lgFirst,

    [classes['xs-last']]: xsLast,
    [classes['sm-last']]: smLast,
    [classes['md-last']]: mdLast,
    [classes['lg-last']]: lgLast,
  }, classNameCustom);

  return (
    <ComponentClass className={ className }>
      { children }
    </ComponentClass>
  );
}

Col.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  componentClass: PropTypes.oneOf([PropTypes.element, PropTypes.string]),

  xs: PropTypes.oneOfType([ PropTypes.number, PropTypes.bool ]),
  sm: PropTypes.oneOfType([ PropTypes.number, PropTypes.bool ]),
  md: PropTypes.oneOfType([ PropTypes.number, PropTypes.bool ]),
  lg: PropTypes.oneOfType([ PropTypes.number, PropTypes.bool ]),

  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,

  reverse: PropTypes.bool,

  xsFirst: PropTypes.bool,
  smFirst: PropTypes.bool,
  mdFirst: PropTypes.bool,
  lgFirst: PropTypes.bool,

  xsLast: PropTypes.bool,
  smLast: PropTypes.bool,
  mdLast: PropTypes.bool,
  lgLast: PropTypes.bool,
};

Col.defaultProps = {
  componentClass: 'div',
};

export default injectSheet(styles)(Col);
