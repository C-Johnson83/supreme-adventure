import React, { useState } from 'react';

import './login.css';

const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleToggleForm = (showLogin) => {
        setShowLoginForm(showLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission based on whether it's login or signup
        if (showLoginForm) {
            // Handle login submission
        } else {
            // Handle signup submission
        }
    };

    return (
        <div className="hero">
            <div className="overlay"></div>
            <div className="content">
                <div className="buttons-container">


                </div>
                {showLoginForm ? (
                    <>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <button className="btn" type="submit">Login</button> or   <button className={`btn ${showLoginForm ? '' : 'active'}`} onClick={() => handleToggleForm(false)}>Sign Up</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <button className="btn" type="submit">Sign Up</button>
                            <div className='btn-container'>
                            </div>
                            <p>
                                <button className={`btn-back ${showLoginForm ? 'active' : ''}`} onClick={() => handleToggleForm(true)}>
                                    <span className="back-arrow"></span>
                                </button>
                                <span> Back to Login </span>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
