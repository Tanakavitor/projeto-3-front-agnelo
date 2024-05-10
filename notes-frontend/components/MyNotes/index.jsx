import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyNotes() {
    const [MyNotes, setMyNotes] = useState([]);

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
        <div>
            <h1>My Notes</h1>
            <ul>
                {MyNotes.map((note) => (
                    <li key={note.id}>{note.title}</li>
                ))}
            </ul>
        </div>
    )
}