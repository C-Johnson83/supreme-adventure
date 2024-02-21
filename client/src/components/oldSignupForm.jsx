import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//import '../css/signupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const formChange = () => {
        navigate('/login');
    };

    return (
        <div className="hero loginHero">
        <div className="overlay"></div>
        <div className="content">
                    <h2>Sign Up</h2>
                    <form >
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName"   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password"   />
                        </div>
                        <button className="btn loginBtn" type="submit">Sign Up</button>
                        <div className='btn-container'>
                        </div>
                        <p>
                            <button className="btn-back" onClick={formChange} >
                                <span className="back-arrow"></span>
                            </button>
                            <span> Back to Login </span>
                        </p>
                    </form>
                </div>
        </div>
    )
}
  

export default SignupForm;
