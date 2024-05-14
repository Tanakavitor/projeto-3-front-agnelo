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
         <div className="login-wrapper">
        <div className='wraper'>
            <h1>My Notes</h1>
            <ul>
                {MyNotes.map((note) => (
                    <li key={note.id}>{note.content}</li>
                ))}
            </ul>
        </div>
        <div>
            <button onClick={() => navigate('/All_Notes')}>Return to Home Page</button>
        </div>
        </div>
        </>
    )
}