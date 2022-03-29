import react from "react";
import "./input-field.css"


export default function inputField(props){
    return(
        <input type={props.type} placeholder={props.placeholder}></input>
    )
}