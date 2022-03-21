
const Quote = ({message,author,newQuote})=>{
    return(
        <div className="mt-10 p-5 text-dark bg-yellow">
                   <h3>{message}</h3>
                   <h5>- {author}</h5>
            <button className="btn btn-danger" onClick={newQuote}>
                Change Quote
            </button>
        </div>
    )
}

export default Quote;