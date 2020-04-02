import { createReducer } from '@reduxjs/toolkit';
import { toggleShowEmployeeInfo, changeCurrentEmployee, addEmployee } from '../actions/index';

const employees = [
  { surname: 'Ivanov1', name: 'Ivan', middleName: 'Ivanovich', birthday: '2017-05-24', personnelNumber: 1, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov2', name: 'Ivan', middleName: 'Ivanovich', birthday: '2017-05-24', personnelNumber: 2, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov3', name: 'Ivan', middleName: 'Ivanovich', birthday: '2017-05-24', personnelNumber: 3, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov4', name: 'Ivan', middleName: 'Ivanovich', birthday: '2017-05-24', personnelNumber: 4, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov5', name: 'Ivan', middleName: 'Ivanovich', birthday: '2017-05-24', personnelNumber: 5, position: 'engineer', unit: 'it' },
];

const initialState = {
  isShowEmployeeInfo: false,
  employees,
  currentEmployee: null,
};

const reducer = createReducer(initialState, {
  [toggleShowEmployeeInfo]: (state) => {
    const prevState = state;
    prevState.isShowEmployeeInfo = !prevState.isShowEmployeeInfo;
  },
  [changeCurrentEmployee]: (state, action) => {
    const prevState = state;
    prevState.currentEmployee = action.payload;
    prevState.isShowEmployeeInfo = true;
  },
  [addEmployee]: (state, action) => {
    const prevState = state;
    prevState.employees.push(action.payload);
  },
});

export default reducer;
