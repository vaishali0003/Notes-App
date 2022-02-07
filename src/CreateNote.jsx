import react, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (e) => {
        const { name, value } = e.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
        console.log(note)
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }

    return (
        <>
            <div className="main11">
                <div className="box">
                    <input type="text" value={note.title} onChange={InputEvent} name="title" className="title" placeholder="Title" autoComplete="off" />
                    <textarea type="text" value={note.content} onChange={InputEvent} name="content" className="description" placeholder="Description" />
                    
                    <AddCircleIcon id="icon2" onClick={addEvent}/>
                  
                </div>
            </div>
        </>
    )
}
export default CreateNote;