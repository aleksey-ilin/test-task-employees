import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '64px',
  },
});

const EmployeesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>EmployeesList</div>
  );
};

export default EmployeesList;
