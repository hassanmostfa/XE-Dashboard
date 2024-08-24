import React from 'react'
import loginImg from '../../images/Login.jpg'
import './auth.css'

const Login = () => {
    return (
        <div className="login">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="login-image"></div>
                <div>
                <form action="" className=" form">
                    <h3>Welcome Back</h3>
                    <div className="form d-flex flex-column w-100">
                        <div className="form-group d-flex flex-column">
                            <label className='mb-2' htmlFor="email">Email</label>  
                            <input type="email" name="email" id="email" placeholder='example@gmail.com' />
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label className='mb-2' htmlFor="name">Password</label>  
                            <input type="password" name="password" id="password" placeholder='Enter Your Password'/>
                        </div>
                        <button className="main-btn mt-2">Login</button>
                        <div className="check text-center mt-2">
                            <p>Not have an account yet? <a href="/register">Register</a></p>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
    )
}

export default Login