import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeSettingShowAttributes } from '../actions';
import { attributes } from '../employeesData/index';

const useStyles = makeStyles({
  root: {
    width: '260px',
  },
});

const Settings = () => {
  const classes = useStyles();
  const settingShowAttributes = useSelector((state) => state.settingShowAttributes);
  const dispatch = useDispatch();

  return (
    <Box mt={16} display="flex" justifyContent="center" width="100%" height="100%">
      <TableContainer className={classes.root}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} align="center">
                Настройки отображения информации по сотрудникам
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(attributes).map((attribute) => (
              <TableRow key={attributes[attribute].id}>
                <TableCell component="th" scope="row" align="center">
                  <Checkbox
                    checked={settingShowAttributes[attribute]}
                    onChange={() => dispatch(changeSettingShowAttributes(attribute))}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                  />
                </TableCell>
                <TableCell align="center">{attributes[attribute].title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Settings;
