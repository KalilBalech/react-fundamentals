import react from "react";
import "./button.css"

export default function button(props){
    return(
        <button onClick={props.onClick} style={{backgroundColor: props.color, width: props.width}}>{props.title}</button>
    )
}