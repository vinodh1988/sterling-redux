
import './App.css'
import { MessageBoxHOC } from './Redux/hocs/MessageHOC'

const App = function(){
      return(
      <div>
         <div className="mt-10 p-5 bg-dark text-light">
               <h1> Redux App</h1>
            
         </div>
         <MessageBoxHOC></MessageBoxHOC>
        </div>
      )
}

export default App