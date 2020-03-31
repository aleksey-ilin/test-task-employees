import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '64px',
  },
});

const AddEmployee = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>AddEmployee</div>
  );
};

export default AddEmployee;
