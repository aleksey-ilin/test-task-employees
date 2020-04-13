import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeCurrentEmployee } from '../actions';

const useStyles = makeStyles({
  root: {
    width: '330px',
  },
  row: {
    cursor: 'pointer',
  },
});

const EmployeesList = () => {
  const classes = useStyles();
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  return (
    <TableContainer className={classes.root}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Фамилия</TableCell>
            <TableCell align="center">Должность</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.length > 0
            ? employees.map((employee) => (
              <TableRow
                key={employee.personalNumber}
                hover
                className={classes.row}
                onClick={() => dispatch(changeCurrentEmployee(employee))}
              >
                <TableCell component="th" scope="row" align="center">
                  {employee.surname || 'имя не указано'}
                </TableCell>
                <TableCell align="center">{employee.position || 'должность не указана'}</TableCell>
              </TableRow>
            ))
            : (
              <TableRow>
                <TableCell colSpan={2} align="center">Список сотрудников пуст</TableCell>
              </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesList;
