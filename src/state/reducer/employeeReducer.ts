import { EMPLOYEE_ACTIONS } from "../actions/employeeActions";

const initialState = {
    isGetEmployeesLoading: false,
    data: [],
    getEmployeesError: null,
    isInsertEmployeeLoading: false,
    insertEmployeeError: null,
    isUpdateEmployeeLoading: false,
    updateEmployeeError: null,
    isDeleteEmployeeLoading: false,
    deleteEmployeeError: null
}

export default (state = initialState, action: { type: any; payload: { error: any; }; }) => {
    switch(action.type) {
        case EMPLOYEE_ACTIONS.GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                isGetStudentsLoading: true,
                getStudentsError: null,
            };
        case EMPLOYEE_ACTIONS.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isGetStudentsLoading: false,
                data: action.payload,
                getStudentsError: null,
            }; 
        case EMPLOYEE_ACTIONS.GET_EMPLOYEES_ERROR:
            return {
                ...state,
                isGetStudentsLoading: false,
                data: [],
                getStudentsError: action.payload.error,
            };
        // INSERT
        case EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_REQUEST:
            return {
                ...state,
                isInsertStudentLoading: true,
                insertStudentError: null,
            };
        case EMPLOYEE_ACTIONS.INSERT_EMPLOYEE_ERROR:
            return {
                ...state,
                isInsertStudentLoading: false,
                insertStudentError: action.payload.error,
            };
        // UPDATE
        case EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_REQUEST:
            return {
                ...state,
                isUdpateStudentLoading: true,
                updateStudentError: null,
            };
        case EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_ERROR:
            return {
                ...state,
                isUdpateStudentLoading: false,
                updateStudentError: action.payload.error,
            };
        // DELETE
        case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                isDeleteStudentLoading: true,
                deleteStudentError: null,
            }; 
        case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_ERROR:
            return {
                ...state,
                isDeleteStudentLoading: false,
                deleteStudentError: action.payload.error,
            };
        default: 
            return {
                ...initialState,
            }
    }
}