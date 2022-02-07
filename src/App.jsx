import react, { useState } from "react";
import Header from "./Header"
import CreateNote from "./CreateNote";
import Note from "./Note";


const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note];
        });
        console.log(note);
    };

    return (
        <>
            <div className="con">
                <Header />
                <CreateNote passNote={addNote} />

                {addItem.map((val, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                    />
                })}

            </div>
        </>
    )
}

export default App;