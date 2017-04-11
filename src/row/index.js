import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

import styles from './styles.js';

function Row({
  classes,
  className: classNameCustom,
  style,
  children,
  componentClass: ComponentClass,

  reverse,
  xsStart,   smStart,   mdStart,   lgStart,
  xsCenter,  smCenter,  mdCenter,  lgCenter,
  xsEnd,     smEnd,     mdEnd,     lgEnd,
  xsTop,     smTop,     mdTop,     lgTop,
  xsMiddle,  smMiddle,  mdMiddle,  lgMiddle,
  xsBottom,  smBottom,  mdBottom,  lgBottom,
  xsAround,  smAround,  mdAround,  lgAround,
  xsBetween, smBetween, mdBetween, lgBetween,
}) {
  const className = cn({
    [classes.row]: true,
    [classes.reverse]: reverse,

    [classes['xs-start']]: xsStart,
    [classes['sm-start']]: smStart,
    [classes['md-start']]: mdStart,
    [classes['lg-start']]: lgStart,

    [classes['xs-center']]: xsCenter,
    [classes['sm-center']]: smCenter,
    [classes['md-center']]: mdCenter,
    [classes['lg-center']]: lgCenter,

    [classes['xs-end']]: xsEnd,
    [classes['sm-end']]: smEnd,
    [classes['md-end']]: mdEnd,
    [classes['lg-end']]: lgEnd,

    [classes['xs-top']]: xsTop,
    [classes['sm-top']]: smTop,
    [classes['md-top']]: mdTop,
    [classes['lg-top']]: lgTop,

    [classes['xs-middle']]: xsMiddle,
    [classes['sm-middle']]: smMiddle,
    [classes['md-middle']]: mdMiddle,
    [classes['lg-middle']]: lgMiddle,

    [classes['xs-bottom']]: xsBottom,
    [classes['sm-bottom']]: smBottom,
    [classes['md-bottom']]: mdBottom,
    [classes['lg-bottom']]: lgBottom,

    [classes['xs-around']]: xsAround,
    [classes['sm-around']]: smAround,
    [classes['md-around']]: mdAround,
    [classes['lg-around']]: lgAround,

    [classes['xs-between']]: xsBetween,
    [classes['sm-between']]: smBetween,
    [classes['md-between']]: mdBetween,
    [classes['lg-between']]: lgBetween,
  }, classNameCustom);

  return (
    <ComponentClass className={ className } style={ style }>
      { children }
    </ComponentClass>
  );
}

Row.propTypes = {
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  componentClass: PropTypes.oneOf([PropTypes.element, PropTypes.string]),

  xsStart: PropTypes.bool,
  smStart: PropTypes.bool,
  mdStart: PropTypes.bool,
  lgStart: PropTypes.bool,

  xsCenter: PropTypes.bool,
  smCenter: PropTypes.bool,
  mdCenter: PropTypes.bool,
  lgCenter: PropTypes.bool,

  xsEnd: PropTypes.bool,
  smEnd: PropTypes.bool,
  mdEnd: PropTypes.bool,
  lgEnd: PropTypes.bool,

  xsTop: PropTypes.bool,
  smTop: PropTypes.bool,
  mdTop: PropTypes.bool,
  lgTop: PropTypes.bool,

  xsMiddle: PropTypes.bool,
  smMiddle: PropTypes.bool,
  mdMiddle: PropTypes.bool,
  lgMiddle: PropTypes.bool,

  xsBottom: PropTypes.bool,
  smBottom: PropTypes.bool,
  mdBottom: PropTypes.bool,
  lgBottom: PropTypes.bool,

  xsAround: PropTypes.bool,
  smAround: PropTypes.bool,
  mdAround: PropTypes.bool,
  lgAround: PropTypes.bool,

  xsBetween: PropTypes.bool,
  smBetween: PropTypes.bool,
  mdBetween: PropTypes.bool,
  lgBetween: PropTypes.bool,
};

Row.defaultProps = {
  componentClass: 'div',
};

export default injectSheet(styles)(Row);
