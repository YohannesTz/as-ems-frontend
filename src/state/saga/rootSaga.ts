
import { all, fork } from "redux-saga/effects";
import employeeSaga from "./employeeSaga";

export function* rootSaga() {
    yield all([fork(employeeSaga)]);
};