import EmployeeModel, { EmployeeRequest } from "../../models/employeeModel";

export enum EMPLOYEE_ACTIONS {
    GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST',
    GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS',
    GET_EMPLOYEES_ERROR = 'GET_EMPLOYEES_ERROR',
    INSERT_EMPLOYEE_REQUEST = 'INSERT_EMPLOYEE_REQUEST',
    INSERT_EMPLOYEE_SUCCESS = 'INSERT_EMPLOYEE_SUCCESS',
    INSERT_EMPLOYEE_ERROR = 'INSERT_EMPLOYEE_ERROR',
    UPDATE_EMPLOYEE_REQUEST = 'UPDATE_EMPLOYEE_REQUEST',
    UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS',
    UPDATE_EMPLOYEE_ERROR = 'UPDATE_EMPLOYEE_ERROR',
    DELETE_EMPLOYEE_REQUEST = 'DELETE_EMPLOYEE_REQUEST',
    DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS',
    DELETE_EMPLOYEE_ERROR = 'DELETE_EMPLOYEE_ERROR',
    ADD_EMPLOYEE_REQUEST = 'ADD_EMPLOYEE_REQUEST',
    ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS',
    ADD_EMPLOYEE_ERROR = 'ADD_EMPLOYEE_ERROR',
};

interface LoadingState {
    isLoading: boolean,
};

interface CommonErrorPayload {
    error: {},
}

export interface GetEmployeesRequest {
    type: typeof EMPLOYEE_ACTIONS.GET_EMPLOYEES_REQUEST;
    args: EmployeeRequest,
};

export interface GetEmployeeSucess {
    type: typeof EMPLOYEE_ACTIONS.GET_EMPLOYEES_SUCCESS;
    payload: EmployeeModel[],
};

export interface GetEmployeeError {
    type: typeof EMPLOYEE_ACTIONS.GET_EMPLOYEES_ERROR;
    payload: CommonErrorPayload
}

export interface InsertEmployeeRequest {
    type: typeof EMPLOYEE_ACTIONS.ADD_EMPLOYEE_REQUEST,
    args: EmployeeModel,
}

export interface InsertEmployeeSuccess {
    type: typeof EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_SUCCESS,
};


export interface InsertEmployeeError {
    type: typeof EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_ERROR;
    payload: CommonErrorPayload,
};

export interface UpdateEmployeeRequest {
    type: typeof EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_REQUEST;
    args: EmployeeModel,
};

export interface UpdateEmployeeSuccess {
    type: typeof EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_SUCCESS,
};

export interface UpdateEmployeeError {
    type: typeof EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_ERROR;
    payload: CommonErrorPayload,
};

export interface DeleteEmployeeRequest {
    type: typeof EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_REQUEST;
    args: string[],
};

export interface DeleteEmployeeSuccess {
    type: typeof EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_SUCCESS,
};

export interface DeleteEmployeeError {
    type: typeof EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_ERROR;
    payload: CommonErrorPayload,
};

//Actions 

export const getEmployeeRequest = (args: EmployeeRequest): GetEmployeesRequest => ({
    type: EMPLOYEE_ACTIONS.GET_EMPLOYEES_REQUEST,
    args
});

export const getEmployeesSuccess = (payload: EmployeeModel[]): GetEmployeeSucess => ({
    type: EMPLOYEE_ACTIONS.GET_EMPLOYEES_SUCCESS,
    payload,
  });
  
  export const getEmployeesError = (payload: CommonErrorPayload): GetEmployeeError => ({
    type: EMPLOYEE_ACTIONS.GET_EMPLOYEES_ERROR,
    payload,
  });
  
  export const insertEmployeeRequest = (args: EmployeeModel): InsertEmployeeRequest => ({
    type: EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_REQUEST,
    args,
  });
  
  export const insertEmployeeSuccess = (): InsertEmployeeSuccess => ({
    type: EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_SUCCESS,
  });
  
  export const insertEmployeeError = (payload: CommonErrorPayload): InsertEmployeeError => ({
    type: EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_ERROR,
    payload,
  });
  
  export const updateEmployeeRequest = (args: EmployeeModel): UpdateEmployeeRequest => ({
    type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_REQUEST,
    args,
  });
  
  export const updateEmployeeSuccess = (): UpdateEmployeeSuccess => ({
    type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_SUCCESS,
  });
  
  export const updateEmployeeError = (payload: CommonErrorPayload): UpdateEmployeeError => ({
    type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_ERROR,
    payload,
  });
  
  export const deleteEmployeeRequest = (args: string[]): DeleteEmployeeRequest => ({
    type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_REQUEST,
    args,
  });
  
  export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
    type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_SUCCESS,
  });
  
  export const deleteEmployeeError = (payload: CommonErrorPayload): DeleteEmployeeError => ({
    type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_ERROR,
    payload,
  });