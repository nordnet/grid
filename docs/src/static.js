import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  static: {
    padding: '.75em 1.25em',
    height: 200,
    width: 200,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    transition: 'all 0.1s linear',
    marginRight: '1em',
    border: 0,

    borderRadius: props => `${props.radius}px`,
    color: theme.color,
    backgroundColor: theme.bg,
  },
});

const Static = ({ classes, children }) => (
  <div className={classes.static}>
    {children}
  </div>
);

export default injectSheet(styles)(Static);
