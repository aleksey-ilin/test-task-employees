import { createReducer } from '@reduxjs/toolkit';
import {
  toggleShowEmployeeInfo,
  changeCurrentEmployee,
  addEmployee,
  changeSettingShowAttributes,
} from '../actions/index';
import { attributes } from '../employeesData/index';

const defaultSettingShowAttributes = Object.keys(attributes)
  .reduce((acc, attribute) => ({ ...acc, [attribute]: true }), {});

const initialState = {
  isShowEmployeeInfo: false,
  employees: [],
  currentEmployee: null,
  settingShowAttributes: defaultSettingShowAttributes,
};

const reducer = createReducer(initialState, {
  [toggleShowEmployeeInfo]: (state) => {
    const prevState = state;
    prevState.isShowEmployeeInfo = !prevState.isShowEmployeeInfo;
  },
  [changeCurrentEmployee]: (state, { payload }) => {
    const prevState = state;
    prevState.currentEmployee = payload;
    prevState.isShowEmployeeInfo = true;
  },
  [addEmployee]: (state, action) => {
    const prevState = state;
    prevState.employees.push(action.payload);
  },
  [changeSettingShowAttributes]: (state, { payload }) => {
    const prevState = state;
    prevState.settingShowAttributes[payload] = !prevState.settingShowAttributes[payload];
  },
});

export default reducer;
