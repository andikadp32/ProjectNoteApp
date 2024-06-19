import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return (
        <EditNote
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          editNote={editNote}
        />
      )
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note Pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  const [editNoteId, setEditNoteId] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map(note => {
      if (note.id === id) {
        return {
          ...note,
          title: title,
          desc: desc,
        };
      }
      return note
    })

    setNoteList(updatedNotes)
  }

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      editNoteId={editNoteId}
    />
  )
}

export default App