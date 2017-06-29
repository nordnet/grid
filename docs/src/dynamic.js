import React from 'react';
import injectSheet, { withTheme } from 'react-jss';

const styles = {
  dynamic: {
    padding: '.75em 1.25em',
    height: 200,
    width: 200,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    transition: 'all 0.1s linear',
    marginRight: '1em',
    border: '1px solid transparent',
    backgroundColor: '#dfdfdf',

    borderRadius: props => `${props.radius}px`,
    color: ({ theme }) => theme.color,
    backgroundColor: ({ theme }) => theme.bg,
  },
};

const Dynamic = ({ classes, children }) => (
  <div className={classes.dynamic}>
    {children}
  </div>
);

export default withTheme(injectSheet(styles)(Dynamic));
