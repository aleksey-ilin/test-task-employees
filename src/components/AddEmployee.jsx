import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

const AddEmployee = ({ employees, addEmployee }) => {
  const [nextUrl, setNextUrl] = useState('');
  const history = useHistory();
  const classes = useStyles();

  const initialValues = Object.keys(attributes)
    .reduce((acc, attribute) => ({ ...acc, [attribute]: '' }), {});

  const submit = (values, { setSubmitting, resetForm }) => {
    addEmployee(values);
    resetForm();
    setSubmitting(false);
    if (nextUrl) {
      history.push(nextUrl);
    }
  };

  const validate = (values) => {
    const errors = {};
    const personalNumbers = employees.map(({ personalNumber }) => personalNumber);
    const isPersonalNumberUnique = personalNumbers.includes(values.personalNumber);
    if (isPersonalNumberUnique) {
      errors.personalNumber = `
        Табельный номер ${values.personalNumber} уже существует.
        Выберете, пожалуйста, уникальный табельный номер.
      `;
    }
    return errors;
  };

  return (
    <Box mt={16} display="flex" justifyContent="center" width="100%" height="100%">
      <Formik initialValues={initialValues} onSubmit={submit} validate={validate}>
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              className={classes.attribute}
              name="surname"
              value={values.surname}
              required
              label="Фамилия"
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="name"
              value={values.name}
              required
              label="Имя"
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="middleName"
              value={values.middleName}
              required
              label="Отчество"
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="birthday"
              value={values.birthday}
              type="date"
              label="Дата рождения"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
            <TextField
              className={classes.attribute}
              name="personalNumber"
              value={values.personalNumber}
              required
              type="number"
              label="Табельный номер"
              onChange={handleChange}
              error={!!errors.personalNumber}
              helperText={errors.personalNumber}
            />
            <FormControl className={classes.attribute}>
              <InputLabel id="position">Должность</InputLabel>
              <Select
                name="position"
                value={values.position}
                labelId="position"
                id="position"
                onChange={handleChange}
              >
                {positions.map((position) => (
                  <MenuItem key={position.id} value={position.name}>{position.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.attribute}>
              <InputLabel id="unit">Подразделение</InputLabel>
              <Select
                name="unit"
                value={values.unit}
                labelId="unit"
                id="unit"
                onChange={handleChange}
              >
                {units.map((unit) => (
                  <MenuItem key={unit.id} value={unit.name}>{unit.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              className={classes.button}
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Сохранить и добавить еще
            </Button>
            <Button
              className={classes.button}
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => setNextUrl('/')}
            >
              Сохранить и вернуться в список
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default connect((state) => ({ employees: state.employees }), actionCreators)(AddEmployee);
