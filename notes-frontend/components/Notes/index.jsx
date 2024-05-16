import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData, useNavigate } from "react-router-dom";
import './style.css';


export default function Note() {
  const [content, setContent] = useState('');
  const [AllNotes, setAllNotes] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all_notes/', {
          headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`
          }
      })
        .then((response) => {
          setAllNotes(response.data.reverse())

            console.log(response.data)
        })
    }, [])

      let createNote = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/create_note/', {content: `${content}`}, {
          headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`
          }
      })
      .then((response) => {
        console.log("atualizando a pagina")
        window.location.reload();
      })
    };

    return (
      <>
      <div className='divisao'>
        <div className='div-form'>
          <form onSubmit={createNote}>
            <h1>Create Note</h1>
            <label>
              Content:
              <input type="text" name="content" onChange={(event) => setContent(event.target.value)} />
            </label>
            <button className="button2" type="submit">Post</button>
          </form>
        </div>
        <div>
            <button onClick={() => navigate('/My_Notes')}>My Notes</button>
        </div>
        <div className='all_notes'>
            <h1>All Notes</h1>
            <ul>
            {AllNotes.map((note) => (
          <ul className='divisao-note' key={note.id}>
            <li className='card'>
              <p className='username'>@{note.user}</p>
              <p className='content'>{note.content}</p>
            </li>
          </ul>
        ))}
            </ul>
        </div>
      </div>
      </>
    )
  }