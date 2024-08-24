import React from 'react'
import './auth.css'
const Register = () => {
    return (
        <div className="register ">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="register-image"></div>
                <div>
                    <form className="form">
                    <h3>Register Now</h3>
                <div className="form d-flex flex-column w-100">
                    <div className="form-group d-flex flex-column ">
                        <label className='mb-2' htmlFor="name">Name</label>  
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label className='mb-2' htmlFor="email">Email</label>  
                        <input type="email" name="email" id="email" placeholder='example@gmail.com' />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label className='mb-2' htmlFor="name">Password</label>  
                        <input type="password" name="password" id="password" placeholder='Enter Your Password'/>
                    </div>
                    <button className="main-btn mt-2">Register</button>
                    <div className="check text-center mt-2">
                        <p>Already have an account ? <a href="/login">Login</a></p>
                    </div>
                </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register