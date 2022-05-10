import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const navigateLogin = event => {
        event.preventDefault();
        navigate('/login')
    }

    const handleUserRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }


    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center my-3' >Please register</h2>
            <form onSubmit={handleUserRegister}>
                <input type="text" name="name" id="" placeholder='Your Full Name' required />
                <input type="email" name="email" id="" placeholder='Enter your email' required />
                <input type="password" name="password" id="" placeholder='Enter your password' />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept genius car terms and condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept genius car terms and condition</label>
                <input
                    disabled={!agree}
                    className="btn btn-info" type="submit" value="Register" />
            </form>
            <p>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;