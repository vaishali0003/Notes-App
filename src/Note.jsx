import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const Note = (props) => {
    return (
        <>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <IconButton aria-label="delete" size="small" id="delBtn">
                    <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
           
        </>
    );
}
export default Note;