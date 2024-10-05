    import React, { useState } from 'react';
    import './auth.css';
    import { useNavigate } from 'react-router-dom';

    const Register = () => {
        const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',email: '',phone: '',password: '',
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value,});
    };

   

    return (
        <div className="register">
        <div className="container d-flex justify-content-center align-items-center">
            <div>
            <form className="form">
                <h3 className='mt-3'>انشاء حساب جديد</h3>
                <div className="form d-flex flex-column w-100">
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="name">الاسم</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="ادخل اسمك"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    <label className='mb-2' htmlFor="email">البريد الالكتروني</label>
                    <input
                    style={{textAlign: 'left'}}
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
                    placeholder="ادخل رقم الهاتف الخاص بك"
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
                    placeholder="ادخل كلمة المرور"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>
                <button className="main-btn mt-2" type="submit">
                    {'انشاء حساب'}
                </button>
                { <p className="text-success mt-2">تم تسجيل الحساب بنجاح!</p>}
                { <p className="text-danger mt-2">فشل تسجيل الحساب</p>}
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
