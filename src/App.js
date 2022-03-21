import MessageBox from "./MessageBox"
import './App.css'
const App = function(){
      return(
      <div>
         <div className="mt-10 p-5 bg-dark text-light">
               <h1> Redux App</h1>
            
         </div>
         <MessageBox></MessageBox>
        </div>
      )
}

export default App