import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const pageRedirect = useNavigate();

    const goToUsers = () => {
        pageRedirect('/users')
    }
  return (
    <>
        <div className="login">
            <section className='loginleft flex-1'></section>
            <section className='loginRight flex-1'>
                <div className="lignForm">
                    <h1>Login to your account</h1>
                    <p>See what is going on to your business</p>
                    <form action="">
                        <div className='input'>
                            <input type="email" name="" id="" required/>
                            <label htmlFor="email">Email </label>
                        </div>
                        <div className='input'>
                            <input type="password" name="" id="" />
                            <label htmlFor="password">Password </label>
                        </div>

                        <div className="forgot">
                            <span>
                                <input type="checkbox" name="checkbox" id="" />
                                <label for='checkbox'>Remember Me</label>
                            </span>
                            <span>
                                <p>Forgot Password?</p>
                            </span>
                        </div>
                        <button onClick={goToUsers} type='sumbit' className='button'>Login</button>
                    </form>
                </div>
            </section>
        </div>
    </>
  )
}

export default Login;