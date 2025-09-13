function Button(props){
    return(
        <button>oncClick={props.evento} {props.text}</button>
    )
}
export default Button