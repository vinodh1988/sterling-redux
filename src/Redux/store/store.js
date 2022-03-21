import { combineReducers } from "redux";
import { firstReducer, QuoteReducer } from "../reducers/reducers";



export const appstate = combineReducers({
    messagedata : firstReducer,
    quotedata : QuoteReducer
})