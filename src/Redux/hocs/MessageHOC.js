import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import MessageBox from "../../MessageBox"
import { messageAction } from "../actions/MessageAction"


const mapStateToProps = (state)=>{
     return {
         message:  state.messagedata.message
     }
}

const mapActionToProps = (dispatch)=>{
    return bindActionCreators({
        changeMessage: messageAction
    },dispatch)
}

export const MessageBoxHOC = connect(mapStateToProps,mapActionToProps)(MessageBox)
