import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData, useNavigate } from "react-router-dom";
import './style.css';


export default function MyNotes() {
    const [MyNotes, setMyNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/my_notes/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            setMyNotes(response.data)
        })
    }, [])

    return (
        <>
          <div className="divisao-note2">
            <h1 className="h33">My Notes</h1>
            {MyNotes.map((note) => (
                <div className='card' key={note.id}>
                    <ul className="all_notes">
                        <p className='content2'>{note.content}</p>
                    </ul>
                </div>
            ))}
            <div>
                <button className="button2" onClick={() => navigate('/All_Notes')}>Return to Home Page</button>
            </div>
          </div>
        </>
    )
}