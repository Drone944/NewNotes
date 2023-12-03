import { MdDeleteForever, MdCheck } from 'react-icons/md';
import { useState } from "react";


const checkDate = (deadline) => {
    const currdate = new Date();
    const duedate = new Date(deadline) - currdate;
    const comeon = Math.floor(duedate / (1000*3600*24));
    if (comeon <= 0) {
        return 'red'
    } else {
        return 'stay'
    }
}

const Note = ({ id, text, date, deadline, handleDeleteNote, handleUpdateNote }) => {
    const deadlineColour = checkDate(deadline);
    const [isEdit, setIsEdit] = useState();
    const [newdeadline, setnewdeadline] = useState('');
    const [updatedText, setUpdatedText] = useState('');
    return(
        <div>
            {isEdit?(
                <div className={`note-${deadlineColour}`}>
                    <textarea rows="10" columns ="10" onChange={(e) => { setUpdatedText(e.target.value) }}>{ text }</textarea>
                    <div className="note-footer">
                    <input type='date' className="newdeadline" value={newdeadline} onChange={(event) => {setnewdeadline(event.target.value)}}></input>
                        <MdCheck onClick={()=> {
                            if(newdeadline !== '') {
                                setIsEdit(false)
                                handleUpdateNote(id, text=updatedText, deadline=newdeadline)
                            } else {
                                setIsEdit(false)
                                handleUpdateNote(id, text=updatedText, deadline)
                            }
                            }
                            }
                            size="1.4em"></MdCheck>
                    </div>
                </div>
            ):(
                <div onClick={()=> {
                    setUpdatedText(text)
                    setIsEdit(true)
                }} className={`note-${deadlineColour}`}>
                    <textarea rows="10" columns ="10">{ text }</textarea>
                    <div className="note-footer">
                        <div className="diffDates">
                            <div>
                                <small>Deadline: { deadline }</small>
                            </div>
                            <small>Created: { date }</small>
                        </div>
                        <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.6em" />
                    </div>
                    </div>
            )}
        </div>
    );
};

export default Note;