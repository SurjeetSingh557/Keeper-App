import React from "react";
import "./style1.css"

function Note(props){
    function handleClick(){
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            <div className="innerBox">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            </div>
            <button onClick={handleClick} id="delete"><i class="fa-solid fa-trash fa-lg"></i></button>
        </div>
    )
}
export default Note