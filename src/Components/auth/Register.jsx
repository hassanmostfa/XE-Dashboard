    import React, { useState } from 'react';
    import './auth.css';
    import { useRegisterUserMutation } from '../../Redux/userSlice';  // Adjust the path based on your folder structure
    import { useNavigate } from 'react-router-dom';

    const Register = () => {
        const navigate = useNavigate();

    const [registerUser, { isLoading, isSuccess, isError }] = useRegisterUserMutation();
    const [formData, setFormData] = useState({
        name: '',email: '',phone: '',password: '',password_confirmation: '',
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value,});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData).unwrap();
            console.log('User registered:', response);
            setTimeout(() => {navigate('/login');}, 2000);
            
        } catch (err) {
        console.error('Failed to register user:', err);
        }
    };

    return (
        <div className="register">
        <div className="container d-flex justify-content-center align-items-center">
            <div>
            <form className="form" onSubmit={handleSubmit}>
                <h3 className='mt-3'>انشاء حساب جديد</h3>
                <div className="form d-flex flex-column w-100">
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="name">الاسم</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="email">البريد الالكتروني</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="phone">الهاتف</label>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="password">كلمة المرور</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="password_confirmation">تاكيد كلمة المرور</label>
                    <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Confirm Your Password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    />
                </div>
                <button className="main-btn mt-2" type="submit" disabled={isLoading}>
                    تسجيل
                </button>
                {isSuccess && <p className="text-success mt-2">تم تسجيل الحساب بنجاح!</p>}
                {isError && <p className="text-danger mt-2">فشل تسجيل الحساب</p>}
                <div className="check text-center mt-2">
                    <p>لديك حساب بالفعل? <a href="/login">سجل دخول</a></p>
                </div>
                </div>
            </form>
            </div>
            <div className="register-image"></div>
        </div>
        </div>
    );
    };

    export default Register;
