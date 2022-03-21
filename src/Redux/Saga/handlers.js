import axios from "axios"
import { call, put } from "redux-saga/effects"

function readQuotesCall(url){
    return axios.get(url)
}

export function* readQuote(){
   let response = yield call(readQuotesCall,"https://api.quotable.io/random")
   yield put({type:"QUOTE_ACTION",data:{message: response.data.content,author:response.data.author}});
}