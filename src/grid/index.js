import React from 'react';
import PropTypes from 'prop-types';
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
  noPadding,
}) {
  const className = cn(
    {
      [classes.grid]: !fluid,
      [classes.gridFluid]: fluid,
      [classes.noPadding]: noPadding,
    },
    classNameCustom,
  );

  return (
    <ComponentClass className={className} style={style}>
      {children}
    </ComponentClass>
  );
}

Grid.propTypes = {
  classes: PropTypes.object,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  componentClass: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  noPadding: PropTypes.bool,
};

Grid.defaultProps = {
  componentClass: 'div',
};

export default injectSheet(styles)(Grid);
