import { useMutation } from '@apollo/client'; // Import useMutation
import { CREATE_USER } from '../../utils/queries'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './signupForm.css';

const SignupForm = () => {
    const [createUser] = useMutation(CREATE_USER); // Use useMutation instead of useQuery
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            // Execute the CREATE_USER mutation
            await createUser({ variables: { username, firstName, lastName, password } });
            // Redirect to login page after successful signup
            navigate('/login');
        } catch (error) {
            console.error('Failed to create user:', error);
            // Handle error scenarios
        }
    };

    const formChange = () => {
        navigate('/login');
    };

    return (
        <div className="hero loginHero">
            <div className="overlay"></div>
            <div className="content">
                <h2>Sign Up</h2>
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn loginBtn" type="submit">Sign Up</button>
                    <div className='btn-container'></div>
                    <p>
                        <button className="btn-back" onClick={formChange}>
                            <span className="back-arrow"></span>
                        </button>
                        <span> Back to Login </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
