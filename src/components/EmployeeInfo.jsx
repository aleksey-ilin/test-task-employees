import React from 'react';
import { connect } from 'react-redux';
import { Drawer, List, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../actions';
import { attributes } from '../employeesData/index';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
  },
  attribute: {
    marginBottom: '30px',
  },
});

const EmployeeInfo = ({
  isShowEmployeeInfo,
  currentEmployee,
  settingShowAttributes,
  toggleShowEmployeeInfo,
}) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={isShowEmployeeInfo} onClose={() => toggleShowEmployeeInfo()}>
      <List className={classes.list}>
        {Object.keys(attributes).map((attribute) => (
          settingShowAttributes[attribute] && (
            <TextField
              key={attributes[attribute].id}
              className={classes.attribute}
              label={attributes[attribute].title}
              defaultValue={currentEmployee[attribute]}
              InputProps={{ readOnly: true }}
            />
          )
        ))}
      </List>
    </Drawer>
  );
};

export default connect(
  (state) => ({
    isShowEmployeeInfo: state.isShowEmployeeInfo,
    currentEmployee: state.currentEmployee,
    settingShowAttributes: state.settingShowAttributes,
  }),
  actionCreators,
)(EmployeeInfo);
