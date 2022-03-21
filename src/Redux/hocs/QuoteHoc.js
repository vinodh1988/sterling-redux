import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Quote from "../../Quote"
import { QuoteActionAPI } from "../actions/QuoteAction"



const mapStateToProps = (state)=>{
     return {
         message:  state.quotedata.quote.message,
         author: state.quotedata.quote.author
     }
}

const mapActionToProps = (dispatch)=>{
    return bindActionCreators({
        newQuote : QuoteActionAPI
    },dispatch)
}

export const QuoteHOC = connect(mapStateToProps,mapActionToProps)(Quote)
