
export const firstReducer=(state={message: "Hello Redux!!!!"},action)=>{
   switch(action.type){
         case "MESSAGE_ACTION":
                 return {message: action.data}
         default:
                 return state
   }
}

export const QuoteReducer = (state ={quote: {
    message: " no message yet",
    author: " No Author "
}},action)=>{
    switch(action.type){
        case "QUOTE_ACTION":
                return {quote: action.data}
        default:
                return state
  }
}