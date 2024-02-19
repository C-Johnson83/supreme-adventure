import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './loginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        // Implement login logic here
        console.log('Logging in with username:', username, 'and password:', password);
    };

    const pageChange = () => {
        navigate('/signup');
    };

    return (
        <div className="hero loginHero">
            <div className="overlay"></div>
            <div className="content">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn loginBtn" type="submit">Login</button> or
                    <button className="btn loginBtn" onClick={pageChange}>Sign Up</button>
                    
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
