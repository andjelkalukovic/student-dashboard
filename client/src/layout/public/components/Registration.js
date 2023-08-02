import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios'

function Registration() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    })
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.name === "" && err.email === "" && err.password === "" && err.confirmPass === "") {
            axios.post('http://localhost:3001/register', values)
                .then((res) => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='form-wrap'>
            <h2>Register</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='input-wrap'>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                        name='name'
                        placeholder='Enter Your Full Name'
                        onChange={handleChange} />
                    {errors.name && <span>{errors.name}</span>}
                </div>
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
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className='input-wrap'>
                    <label htmlFor='confirmPass'>Confirm Password</label>
                    <input type='password'
                        name='confirmPass'
                        placeholder='Confirm Password'
                        onChange={handleChange} />
                    {errors.confirmPass && <span>{errors.confirmPass}</span>}
                </div>
                <div className='btn-wrap'>
                    <button type='submit'>Register</button>
                </div>
                <div className='link-wrap'>
                    <p>Already have an account?</p>
                    <Link to='/'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Registration