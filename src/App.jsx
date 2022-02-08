import react, { useState } from "react";
import Header from "./Header"
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";


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
            <Header />
            <div className="con">
                <CreateNote passNote={addNote} />
                <div className="main12">
                    {addItem.map((val, index) => {
                        return <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                        />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;