import react from "react";

export default function inputField(props){
    return(
        <input type={props.type} placeholder={props.placeholder}></input>
    )
}