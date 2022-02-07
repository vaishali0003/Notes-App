import react from "react";
import NotesIcon from '@mui/icons-material/Notes';

const Header =()=>{
    return (
        <>
        <div className="header">
              <NotesIcon id="icon"/>
              <h1 className="head">iNotes</h1>
        </div>
        </>
    );
}
export default Header;