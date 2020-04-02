import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../actions';
import { attributes, positions, units } from '../employeesData/index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  attribute: {
    marginBottom: '20px',
  },
  button: {
    marginBottom: '20px',
  },
});

const AddEmployee = ({ addEmployee }) => {
  const classes = useStyles();

  const initialValues = Object.keys(attributes).reduce((acc, attribute) => {
    if (attribute === 'personnelNumber') {
      return { ...acc, [attribute]: null };
    }
    return { ...acc, [attribute]: '' };
  }, {});

  const submit = (values, { setSubmitting, resetForm }) => {
    addEmployee(values);
    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <Box mt={16} display="flex" justifyContent="center" width="100%" height="100%">
      <Formik initialValues={initialValues} onSubmit={submit}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              className={classes.attribute}
              name="surname"
              required
              label="Фамилия"
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="name"
              required
              label="Имя"
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="middleName"
              required
              label="Отчество"
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="birthday"
              type="date"
              label="Дата рождения"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="personnelNumber"
              type="number"
              label="Табельный номер"
              onChange={handleChange}
            />
            <FormControl className={classes.attribute}>
              <InputLabel id="demo-simple-select-disabled-label">Должность</InputLabel>
              <Select
                name="position"
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                value={values.position}
                onChange={handleChange}
              >
                {positions.map((position) => (
                  <MenuItem key={position.id} value={position.name}>{position.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.attribute}>
              <InputLabel id="demo-simple-select-disabled-label">Подразделение</InputLabel>
              <Select
                name="unit"
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                value={values.unit}
                onChange={handleChange}
              >
                {units.map((unit) => (
                  <MenuItem key={unit.id} value={unit.name}>{unit.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button className={classes.button} disabled={isSubmitting} type="submit" variant="contained" color="primary">
              Сохранить и добавить еще
            </Button>
            <Button className={classes.button} disabled={isSubmitting} type="submit" variant="contained" color="primary">
              Сохранить и вернуться в список
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default connect(null, actionCreators)(AddEmployee);
