import axios from "axios"

export const QuoteAction =(data)=>{
    return {
        type: "QUOTE_ACTION",
        data: data
    }
}

export const QuoteAsyncAction =(data)=>{
    return {
        type: "QUOTE_ASYNC_ACTION",
        data: data
    }
}


export const QuoteActionAPI = ()=>{
    return async (dispatch)=>{
         try{
             let response = await axios.get("https://api.quotable.io/random")
             let data= {
                 message: response.data.content,
                 author: response.data.author
             }
            dispatch(QuoteAction(data))
            }
        catch(e){
             dispatch(QuoteAction({message:"",author:""}))
        }
}}