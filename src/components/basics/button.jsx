import react from "react";

export default function button(props){
    return(
        <button style={{backgroundColor: props.color, width: props.width}}>{props.title}</button>
    )
}