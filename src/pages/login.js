import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onLoginUser } from '../services/api';

const Login = () => {
    const pageRedirect = useNavigate();
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const goToUsers = async () => {
        const response = await onLoginUser(email, password);
        if(response?.access_token){
            localStorage.setItem('token', response.access_token)
            pageRedirect('/users')
        }

    }
    const onchangeEmail = (e) => {
        setemail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
  return (
    <>
        <div className="login">
            <section className='loginleft flex-1'></section>
                <section className='loginRight flex-1'>
                    <div className="lignForm">
                        <h1>Login to your account</h1>
                        <p>See what is going on to your business</p>
                        <form action={goToUsers}>
                            <div className='input'>
                                <input onChange={onchangeEmail} value={email} type="email" required/>
                                <label htmlFor="email">Email </label>
                            </div>
                            <div className='input'>
                                <input onChange={onChangePassword} value={password} type="password" />
                                <label htmlFor="password">Password </label>
                            </div>

                            <div className="forgot">
                                <span>
                                    <input type="checkbox" name="checkbox"/>
                                    <label htmlFor='checkbox'>Remember Me</label>
                                </span>
                                <span>
                                    <p>Forgot Password?</p>
                                </span>
                            </div>
                            <button onClick={goToUsers} type='submit' className='button'>Login</button>
                        </form>
                    </div>
                </section>
        </div>
    </>
  )
}

export default Login;