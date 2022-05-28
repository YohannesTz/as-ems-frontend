import { all, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import EmployeeModel, { EmployeeRequest } from '../../models/employeeModel';
import { formatDate } from '../../utils/dateUtils';
import { get } from 'lodash';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { deleteEmployeeError, getEmployeesError, getEmployeeRequest, getEmployeesSuccess, insertEmployeeError, EMPLOYEE_ACTIONS, updateEmployeeError } from '../actions/employeeActions';

// AXIOS
const baseUrl = 'http://localhost:3000';
const headers = { 
    'Content-Type': 'application/json',
    mode: 'cors',
    credentials: 'include'
};

const axiosClient = axios;
axiosClient.defaults.baseURL = baseUrl;
axiosClient.defaults.headers = headers;

const getEmployeesAsync = (body: EmployeeRequest) => {
    return axiosClient.post<EmployeeModel[]>(
        '/student/list', 
        body
    );
}

function* getEmployeesSaga(action: any) {
    try {
        const args = get(action, 'args', {})
        const response = yield call(getEmployeesAsync, args);
        yield put(getEmployeesSuccess(response.data));
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(getEmployeesError({error}));
    }
}

const insertEmployeesAsync = async (body: EmployeeModel) => {
    return axiosClient.post(
        '/student',
        body
    )
}

function* insertEmployeeSaga(action: any) {
    try {
        const studentModel = get(action, 'args');
        if (studentModel == null) {
            throw new Error('Request is null');
        }
        yield call(insertEmployeesAsync, studentModel);

        const getAction = {
            type: EMPLOYEE_ACTIONS.GET_EMPLOYEES_REQUEST,
            args: {},
        };
        yield call(getEmployeesSaga, getAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(insertEmployeeError({error}));
    }
};

const updateEmployeeAsync = async (body: EmployeeModel) => {
    return axiosClient.put(
        '/student',
        body
    );
};

/**
 * 
 * @param action {type, payload: EmployeeModel}
 */
function* updateEmployeeSaga(action: any) {
    try {
        const studentModel = get(action, 'args');
        if (studentModel == null) {
            throw new Error('Request is null');
        };
        yield call(updateEmployeeAsync, studentModel);

        const getEmployeeRequestAction = getEmployeeRequest({});
        yield call(getEmployeesSaga, getEmployeeRequestAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(updateEmployeeError({error}));
    }
};

const deleteEmployeesAsync = async (ids: string[]) => {
    return axiosClient.post(
        '/student/inactive',
        {ids}
    );
};

/**
 * 
 * @param action {type, payload: string[]}
 */
 function* deleteEmployeeSaga(action: any) {
    try {
        const ids = get(action, 'args');
        if (isEmpty(ids)) {
            throw new Error('Request is null');
        };
        yield call(deleteEmployeesAsync, ids);

        const getEmployeeRequestAction = getEmployeeRequest({});
        yield call(getEmployeesSaga, getEmployeeRequestAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(deleteEmployeeError({error}));
    }
};

function* studentSaga() {
    yield all([
        takeLatest(EMPLOYEE_ACTIONS.GET_EMPLOYEES_REQUEST, getEmployeesSaga),
        takeLeading(EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_REQUEST, insertEmployeeSaga),
        takeLeading(EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga),
        takeLeading(EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga),
    ]);
}

export default studentSaga;