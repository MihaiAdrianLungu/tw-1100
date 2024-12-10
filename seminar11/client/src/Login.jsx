import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(username.length === 0 || password.length === 0) {
            setError('Empty username or password')
            return;
        }

        if (error.length) {
            setError('')
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }

        const response = await fetch('http://localhost:3000/auth/login', options);
        const json = await response.json();

        if (!json.success) {
            setError(json.message);
        } else {
            localStorage.setItem('token', json.data.token);
            navigate('/');
        }
    }

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Save
                </button>
                {error.length > 0 && <span>{error}</span>}
            </form>
        </div>
    )
}

export default Login