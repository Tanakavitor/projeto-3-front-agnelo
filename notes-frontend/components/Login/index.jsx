import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import './style.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password
        };

        axios.post('http://localhost:8000/api/token/', data)
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
    }


    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <Link to={"cadastro"}>Não possui conta? Cadastre-se aqui</Link>
                </div>
            </form>
        </div>
    )
}