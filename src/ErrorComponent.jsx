const ErrorComponent = ({message}) => {
    console.log(message);
    return (
        <div style={{color:"red"}}>
            <h1>Error</h1>
            {message}
        </div>
    )
}

export default ErrorComponent;