import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

import styles from './styles';

function Grid({
  classes,
  fluid,
  className: classNameCustom,
  style,
  children,
  componentClass: ComponentClass,
}) {
  const className = cn({
    [classes.grid]: !fluid,
    [classes.gridFluid]: fluid,
  }, classNameCustom);

  return (
    <ComponentClass className={ className } style={ style }>
      { children }
    </ComponentClass>
  );
}

Grid.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  componentClass: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  classes: PropTypes.object,
};

Grid.defaultProps = {
  componentClass: 'div',
};

export default injectSheet(styles)(Grid);
