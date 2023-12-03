import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  }

  let updateNote = async (id, text, deadline) => {
    let newNote = {
      'text': text,
      'deadline': deadline
    };
    fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    getNotes()
    getNotes()
    }


  let deleteNote = async (id) => {
    fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    getNotes()
    }


  let addNote = async (text, deadline) => {
    if(deadline.length <= 0) {
      deadline = ''
    }
    let newNote = {
      'text': text,
      'deadline': deadline
    };
    let response = await fetch('/api/notes/create/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)})
    let data = await response.json()
    const newNotes = [...notes, data]
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // const addNote = (text) => {
  //   const date = new Date();
    // const newNote = {
    //   id: nanoid(),
    //   text: text,
    //   date: date.toLocaleDateString()
    // }
  //   const newNotes = [...notes, newNote]
  //   setNotes(newNotes);
  // };

  // const deleteNote = (id) => {
  //   const newNotes = notes.filter((note)=> note.id !== id);
  //   setNotes(newNotes);
  // };
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchNote={ setSearchText }/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} handleUpdateNote={updateNote} />
      </div>
    </div>
  );
};

export default App