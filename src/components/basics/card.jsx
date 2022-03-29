import react from "react"
import "./card.css"

export default function card(props){
    return(
        <div className="card" style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    )
}