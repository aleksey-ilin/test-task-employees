import { createReducer } from '@reduxjs/toolkit';
import { toggleShowEmployeeInfo, changeCurrentEmployee } from '../actions/index';

const employees = [
  { surname: 'Ivanov1', name: 'Ivan', middleName: 'Ivanovich', birthday: '1.01.2001', personnelNumber: 1, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov2', name: 'Ivan', middleName: 'Ivanovich', birthday: '1.01.2001', personnelNumber: 2, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov3', name: 'Ivan', middleName: 'Ivanovich', birthday: '1.01.2001', personnelNumber: 3, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov4', name: 'Ivan', middleName: 'Ivanovich', birthday: '1.01.2001', personnelNumber: 4, position: 'engineer', unit: 'it' },
  { surname: 'Ivanov5', name: 'Ivan', middleName: 'Ivanovich', birthday: '1.01.2001', personnelNumber: 5, position: 'engineer', unit: 'it' },
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
});

export default reducer;
