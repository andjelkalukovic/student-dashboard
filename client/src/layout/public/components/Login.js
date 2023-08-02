import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidations';
import axios from 'axios';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loginStatus, setLoginStatus] = useState('');

    const handleChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:3001/login', values)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.message) {
                        setLoginStatus(res.data.message);
                    } else {
                        navigate('/home');
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='form-wrap'>
            <h2>Login</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='input-wrap'>
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className='input-wrap'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                        name='password'
                        placeholder='Enter Your Password'
                        onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <div className='btn-wrap'>
                    <button type='submit'>Login</button>
                </div>
                <div className='link-wrap'>
                    <Link to='/register'>Create Account</Link>
                </div>
            </form>
            {loginStatus !== '' && <span className='error-message'>{loginStatus}</span>}
        </div>
    )
}

export default Login