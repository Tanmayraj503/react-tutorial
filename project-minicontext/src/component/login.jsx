import React from 'react';
import UserContext from '../context/usercontext';
import { useState, useContext } from 'react';

function Login() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const { setUser } = useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({ username, password });
    }
    return (
        <>
            <h2>Login</h2>

            <input type="text" placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handlesubmit}>Login</button>

        </>
    )

}
export default Login