import { get } from 'lodash';
import { createSelector } from 'reselect';
import { AppState } from '../reducer/rootReducer';

const entity = 'entities.employee';

const getEmployeesLoadingState = (state: AppState) => get(state, `${entity}.isGetEmployeesLoading`, false);
const getEmployeesState = (state:  AppState) => get(state, `${entity}.data`, []);
const getEmployeesErrorState = (state: AppState) => get(state, `${entity}.getEmployeesError`);
export const isGetEmployeesLoading = createSelector(getEmployeesLoadingState, (isLoading) => isLoading);
export const getEmployees = createSelector(getEmployeesState, (students) => students);
export const getEmployeesError = createSelector(getEmployeesErrorState, (error) => error);

const insertEmployeeLoadingState = (state: AppState) => get(state, `${entity}.isInsertEmployeeLoading`, false);
const insertEmployeeErrorState = (state: AppState) => get(state, `${entity}.insertEmployeeError`);
export const isInsertEmployeeLoading = createSelector(insertEmployeeLoadingState, (isLoading) => isLoading);
export const insertEmployeeError = createSelector(insertEmployeeErrorState, (error) => error);

const updateEmployeeLoadingState = (state: AppState) => get(state, `${entity}.isUdpateEmployeeLoading`, false);
const updateEmployeeErrorState = (state: AppState) => get(state, `${entity}.updateEmployeeError`);
export const isUpdateEmployeeLoading = createSelector(updateEmployeeLoadingState, (isLoading) => isLoading);
export const updateEmployeeError = createSelector(updateEmployeeErrorState, (error) => error);

const deleteEmployeeLoadingState = (state: AppState) => get(state, `${entity}.isDeleteEmployeeLoading`, false);
const deleteEmployeeErrorState = (state: AppState) => get(state, `${entity}.deleteEmployeeError`);
export const isDeleteEmployeeLoading = createSelector(deleteEmployeeLoadingState, (isLoading) => isLoading);
export const deleteEmployeeError = createSelector(deleteEmployeeErrorState, (error) => error);
