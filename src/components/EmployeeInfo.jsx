import React from 'react';
import { connect } from 'react-redux';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import * as actionCreators from '../actions';

const EmployeeInfo = ({ isShowEmployeeInfo, currentEmployee, toggleShowEmployeeInfo }) => (
  <Drawer anchor="right" open={isShowEmployeeInfo} onClose={() => toggleShowEmployeeInfo()}>
    <List>
      {Object.keys(currentEmployee).map((infoItem) => (
        <ListItem key={1}>
          <ListItemText primary={currentEmployee[infoItem]} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default connect(
  (state) => ({
    isShowEmployeeInfo: state.isShowEmployeeInfo,
    currentEmployee: state.currentEmployee,
  }),
  actionCreators,
)(EmployeeInfo);
