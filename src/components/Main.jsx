import React from 'react';
import { connect } from 'react-redux';
import { Box, makeStyles } from '@material-ui/core';
import EmployeesList from './EmployeesList';
import EmployeeInfo from './EmployeeInfo';

const useStyles = makeStyles({
  root: {
    marginTop: '104px',
  },
});

const Main = ({ isShowEmployeeInfo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" justifyContent="center">
      <EmployeesList />
      {isShowEmployeeInfo && <EmployeeInfo />}
    </Box>
  );
};

export default connect((state) => ({ isShowEmployeeInfo: state.isShowEmployeeInfo }), null)(Main);
