import axios from "axios"
import { call, put } from "redux-saga/effects"

function readQuotesCall(url){
    return axios.get(url)
}

function writeQuotesCall(url,data){
    console.log("called to post data")
    return axios.post(url,data)
}
export function* readQuote(){
   let response = yield call(readQuotesCall,"https://api.quotable.io/random")
   yield put({type:"QUOTE_ACTION",data:{message: response.data.content,author:response.data.author}});
}

export function* readQuotes(){
    let response = yield call(readQuotesCall,"http://localhost:4500/Quotes")
    yield put({type:"QUOTES_ALL_ACTION",
    data:response.data});
 }

 
export function* writeQuotes(action){
    console.log("Got here...")
    let response = yield call(writeQuotesCall,"http://localhost:4500/Quotes",action.data)
    yield put({type:"WRITE_ACTION",
    data:response.data});
 }