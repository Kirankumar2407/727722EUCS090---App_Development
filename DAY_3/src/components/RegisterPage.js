import React from 'react';
import { Link } from 'react-router-dom';
// import './Auth.css';

const RegisterPage = () => {
    return (
        <div className="auth-page">
            <h2>Register</h2>
            <form>
                <label>Name:</label>
                <input type="text" required />
                
                <label>Email:</label>
                <input type="email" required />
                
                <label>Password:</label>
                <input type="password" required />
                
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegisterPage;