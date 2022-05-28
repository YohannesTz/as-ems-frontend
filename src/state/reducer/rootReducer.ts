import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
    entities: combineReducers({
        employee: employeeReducer
    }),
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;