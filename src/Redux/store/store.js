import { combineReducers } from "redux";
import { firstReducer, secondReducer } from "../reducers/reducers";



export const appstate = combineReducers({
    messagedata : firstReducer,
    seconddata : secondReducer
})