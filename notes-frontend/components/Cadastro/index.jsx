import { useState } from 'react';
import axios from 'axios';
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Cadastro() {

    const [username, setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const cadastrar = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            email: email,
            password: password
        };

        axios.post('http://127.0.0.1:8000/api/users/', data)
        .then((response) => {
            console.log(response);
            navigate('/');
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
    }

    return (
        <div className="login-wrapper">
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}