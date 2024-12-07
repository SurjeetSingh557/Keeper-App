import React,{useState} from "react"

function CreateArea(props){
    const [note,setNote]=useState({title:"",content:""})
    function handleChange(event){
        const {name,value}=event.target
        setNote(prevNote=>{
            return{
                ...prevNote,[name]:value
            }
        })
    }
    function submitNote(event){

        if (note.title!="" && note.content!=""){
            props.onAdd(note)
            setNote({
                title:"",
                content:""
            })
            event.preventDefault()
        }else{
            alert("Please enter the title and note");
        }
    }
    return(
        <div className="container">
            <form>
                <div id="formAdjust">
                <input name="title" id="nameField" onChange={handleChange} value={note.title} placeholder="Title"/>
                <textarea id="contentField" name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3"/>
                </div>
                <button id="add" onClick={submitNote}><i class="fa-solid fa-plus fa-xl"></i></button>
            </form>
        </div>
    );
}
export default CreateArea;