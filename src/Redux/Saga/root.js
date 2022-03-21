import { readQuote, readQuotes ,writeQuotes} from "./handlers";
import {takeEvery, takeLatest} from 'redux-saga/effects'


export function* rootSaga(){
    yield takeEvery("QUOTE_ASYNC_ACTION",readQuote)
    yield takeEvery("READ_QUOTES",readQuotes)
    yield takeEvery("WRITE_QUOTES",writeQuotes)
    yield takeEvery("WRITE_ACTION",readQuotes)
}