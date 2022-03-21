const MessageBox = ({message,changeMessage})=>{
    return(
        <div className="mt-10 p-5 text-danger bg-bg">
            <h3>Message is</h3>
            <hr/>
           <div className="alert alert-info">
                 <h4>{message}</h4>
            </div> 
            <button className="btn btn-success" onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default MessageBox; 