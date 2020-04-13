import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import EmployeesList from './EmployeesList';
import EmployeeInfo from './EmployeeInfo';

const Main = () => {
  const isShowEmployeeInfo = useSelector((state) => state.isShowEmployeeInfo);

  return (
    <Box mt={16} display="flex" justifyContent="center">
      <EmployeesList />
      {isShowEmployeeInfo && <EmployeeInfo />}
    </Box>
  );
};

export default Main;
