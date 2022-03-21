import { readQuote } from "./handlers";
import {takeEvery} from 'redux-saga/effects'


export function* rootSaga(){
    yield takeEvery("QUOTE_ASYNC_ACTION",readQuote)
}