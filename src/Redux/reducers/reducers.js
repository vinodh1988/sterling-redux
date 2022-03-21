
export const firstReducer=(state={message: "Hello Redux!!!!"},action)=>{
   switch(action.type){
         case "MESSAGE_ACTION":
                 return {message: action.data}
         default:
                 return state
   }
}

export const secondReducer = (state ={second: "Second Hello"},action)=>{
    switch(action.type){
        case "SECOND_ACTION":
                return {second: action.data}
        default:
                return state
  }
}