import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, List, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toggleShowEmployeeInfo } from '../actions';
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

const EmployeeInfo = () => {
  const classes = useStyles();
  const {
    isShowEmployeeInfo,
    currentEmployee,
    settingShowAttributes,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={isShowEmployeeInfo} onClose={() => dispatch(toggleShowEmployeeInfo())}>
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

export default EmployeeInfo;
