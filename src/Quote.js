
const Quote = ({message,author,newQuote,quotes,storeQuote})=>{
    return(
        <div className="mt-10 p-5 text-dark bg-yellow">
                   <h3>{message}</h3>
                   <h5>- {author}</h5>
            <button className="btn btn-danger" onClick={newQuote}>
                Change Quote
            </button>
            <button className="btn btn-danger" onClick={()=>{storeQuote({quote:message,author:author})}}>Store this Quote</button>
            <hr/>
            <h3>Stored Quotes</h3>
            <ul class="list-group">
             { quotes.map(x=> <li className="list-group-item" key={x.quote}>
                 <h5>{x.quote}</h5>
                 <h6>-{x.author}</h6>
             </li>)}
  
          </ul>
        </div>
    )
}

export default Quote;