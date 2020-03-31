import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '64px',
  },
});

const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>Settings</div>
  );
};

export default Settings;
