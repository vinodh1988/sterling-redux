export const messageAction=()=>{
       const messages=[
           "React is component based",
           "Redux is for state management",
           "React Components has properties and states",
           "React has hooks",
           "React is a Great UI Framework",
           "React is wonderful"
       ]

       return {
        type: "MESSAGE_ACTION",
        data: messages [Math.round(Math.random()*5)]
       }
}