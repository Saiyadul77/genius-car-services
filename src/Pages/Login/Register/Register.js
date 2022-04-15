import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        event.preventDefault();
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center my-3' >Please register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Full Name' required />
                <input type="email" name="email" id="" placeholder='Enter your email' required />
                <input type="password" name="password" id="" placeholder='Enter your password' />
                <input type="password" name="confirm-password" id="" placeholder='Retype password' required />
                <input type="submit" value="Register" />
            </form>
            <p>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Register</Link></p>
        </div>
    );
};

export default Register;