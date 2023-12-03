import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteTexT] = useState('');
    const [deadline, setdeadline] = useState('');
    const characterLimit = 200;
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteTexT(event.target.value);
        }
    };
    const handleDeadChange = (event) => {
        setdeadline(event.target.value);
        
    };
    const handleSaveClick = () => {
        if (noteText.trim().length > 0 && deadline !== '') {
            handleAddNote(noteText,deadline);
            setNoteTexT('');
            setdeadline('');
        }
    };
    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <input type='date' className="deadline" value={deadline} onChange={handleDeadChange}></input>
            <div className="note-footer">
                <small>{ characterLimit - noteText.length } Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote