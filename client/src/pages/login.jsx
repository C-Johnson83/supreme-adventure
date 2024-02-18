import React, { useState } from 'react';

const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        eventType: 'Wedding' // Default event type
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
        <div className="hero loginHero">
            <div className="overlay"></div>
            <div className="content">
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
                            <button className="btn loginBtn" type="submit">Login</button> or   <button className={`btn ${showLoginForm ? '' : 'active'} loginBtn`} onClick={() => handleToggleForm(false)}>Sign Up</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="eventType">Event Type:</label>
                                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Baby Shower">Baby Shower</option>
                                    <option value="Birthday">Birthday</option>
                                </select>
                            </div>
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
                            <button className="btn loginBtn" type="submit">Sign Up</button>
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
