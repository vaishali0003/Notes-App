import react, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);
    console.log(expand)

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

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }

    const expandIt=()=>{
        setExpand(true);
    }
    const shrinkIt=()=>{
        setExpand(false);
    }


    return (
        <>
            <div className="main11">
                <div className="box">
                    {expand ?
                    <input type="text" value={note.title} onChange={InputEvent} name="title" className="title" placeholder="Title" autoComplete="off" onDoubleClick={shrinkIt} />: null}
                    <textarea type="text" value={note.content} onChange={InputEvent} name="content" className="description" placeholder="Write a note..." onClick={expandIt} onDoubleClick={shrinkIt}/> 
                    {expand ?
                    <AddCircleIcon id="icon2" onClick={addEvent} />
                    :null}
                </div>
            </div>
        </>
    )
}
export default CreateNote;