import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import EmployeesList from './EmployeesList';
import EmployeeInfo from './EmployeeInfo';

const Main = ({ isShowEmployeeInfo }) => (
  <Box mt={16} display="flex" justifyContent="center">
    <EmployeesList />
    {isShowEmployeeInfo && <EmployeeInfo />}
  </Box>
);

export default connect((state) => ({ isShowEmployeeInfo: state.isShowEmployeeInfo }), null)(Main);
