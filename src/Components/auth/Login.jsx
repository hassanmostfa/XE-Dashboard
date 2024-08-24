import React, { useState } from 'react';
import { useLoginUserMutation } from '../../Redux/userSlice'; // Adjust the path based on your folder structure
import { useDispatch } from 'react-redux';
import { setToken } from '../../Redux/userSlice';
import './auth.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
const [loginUser, { isLoading, isSuccess, isError }] = useLoginUserMutation();
const [formData, setFormData] = useState({email: '',password: '',});
const dispatch = useDispatch();

const handleChange = (e) => {
setFormData({...formData,[e.target.name]: e.target.value,});
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
    const response = await loginUser(formData).unwrap();
    
    // Assuming the token is in response.token
    const token = response.access_token;

    // Dispatch the token to Redux state
    dispatch(setToken(token));

    console.log('User logged in:', response);

    // Redirect to the appropriate page
    if (response.role === 'admin') {navigate('/admin/dashboard');}
    else if (response.role === 'user') {navigate('/user/home');}

    // Save the state in local storage
    localStorage.setItem('state', 'authenticated');
    setTimeout(() => { navigate('/user/home'); }, 2000);

} catch (err) {
    console.error('Failed to log in:', err);
}
};

return (
    <div className="login">
        <div className="container d-flex justify-content-center align-items-center">
            <div>
            <form className="form" onSubmit={handleSubmit}>
        <h3>مرحبا بعودتك</h3>
        <div className="form d-flex flex-column w-100">
            <div className="form-group d-flex flex-column">
            <label className='mb-2' htmlFor="email">البريد الالكتروني</label>
            <input
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
            <button className="main-btn mt-2" type="submit" disabled={isLoading}>
            {isLoading ? 'جاري تسجيل الدخول...' : 'سجل دخول'}
            </button>
            {isSuccess && <p className="text-success mt-2">تم تسجيل الدخول بنجاح!</p>}
            {isError && <p className="text-danger mt-2">فشل تسجيل الدخول.</p>}
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