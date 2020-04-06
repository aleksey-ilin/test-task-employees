import React from 'react';
import PropTypes from 'prop-types';
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

Main.propTypes = {
  isShowEmployeeInfo: PropTypes.bool,
};

Main.defaultProps = {
  isShowEmployeeInfo: false,
};

export default connect((state) => ({ isShowEmployeeInfo: state.isShowEmployeeInfo }), null)(Main);
