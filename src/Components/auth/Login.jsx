import React, { useState , useEffect } from 'react';

import './auth.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({email: '',password: '',});
const [error, setError] = useState('');



const handleChange = (e) => {
setFormData({...formData,[e.target.name]: e.target.value,});
};


return (
    <div className="login">
        <div className="container d-flex justify-content-center align-items-center">
            <div>
            <form className="form">
        <h3>مرحبا بعودتك</h3>
        <div className="form d-flex flex-column w-100">
            <div className="form-group d-flex flex-column">
            <label className='mb-2' htmlFor="email">البريد الالكتروني</label>
            <input
                style={{textAlign: 'left'}}
                type="email"
                name="email"
                id="email"
                placeholder='example@gmail.com'
                value={formData.email}
                onChange={handleChange}
            />
            </div>
            <div className="form-group d-flex flex-column">
            <label className='mb-2' htmlFor="password">كلمة المرور</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleChange}
            />
            </div>
            <button className="main-btn mt-2" type="submit">
            {'سجل دخول'}
            </button>
            {<p className="text-success mt-2">تم تسجيل الدخول بنجاح!</p>}
            {<p className="text-danger mt-2">{error === 'Invalid credentials' ? 'البريد الالكتروني او كلمة المرور غير صحيحة' : 'حدث خطأ ما'}</p>}
            <div className="check text-center mt-2">
            <p>ليس لديك حساب حتي الان؟ <a href="/register">انشئ حساب</a></p>
            </div>
        </div>
        </form>
            </div>
            <div className="login-image"></div>
        </div>
        </div>
)
}

export default Login