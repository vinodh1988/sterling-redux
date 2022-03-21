import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Quote from "../../Quote"
import { QuoteActionAPI, QuoteAsyncAction } from "../actions/QuoteAction"



const mapStateToProps = (state)=>{
     return {
         message:  state.quotedata.quote.message,
         author: state.quotedata.quote.author,
         quotes: state.quotedata.quotes
     }
}
/*
const mapActionToProps = (dispatch)=>{
    return bindActionCreators({
        newQuote : QuoteActionAPI
    },dispatch)
}*/

const mapActionToProps = (dispatch)=>{
    return bindActionCreators({
        newQuote : QuoteAsyncAction,
        storeQuote: (data)=>{
            console.log(data);
            dispatch({
            type:"WRITE_QUOTES",
            data: data
         })}
    },dispatch)
}
export const QuoteHOC = connect(mapStateToProps,mapActionToProps)(Quote)
