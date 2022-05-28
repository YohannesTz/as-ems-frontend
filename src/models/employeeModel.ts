export interface EmployeeRequest {
    name?: string,
    salary?: number
}

export default interface EmployeeModel {
    _id?: string,
    name: string,
    birth_date: string,
    gender: string,
    salary: number
}