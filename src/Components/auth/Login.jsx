import React, { useState, useEffect } from "react";

import "./auth.css";
import { useNavigate } from "react-router-dom";
import img from "../../images/logo.webp";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <form className="form">
            <div className="d-flex justify-content-center">
                <img src={img} alt="logo" style={{ width: "230px" }} />
            </div>
            <h3>مرحبا بعودتك</h3>
            <div className="form d-flex flex-column w-100">
              <div className="form-group d-flex flex-column">
                <label className="mb-2" htmlFor="email">
                  البريد الالكتروني
                </label>
                <input
                  style={{ textAlign: "left" }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group d-flex flex-column">
                <label className="mb-2" htmlFor="password">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="ادخل كلمة المرور"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button className="main-btn mt-2" onClick={() => navigate("/")} type="submit">
                {"سجل دخول"}
              </button>
              {/* {<p className="text-success mt-2">تم تسجيل الدخول بنجاح!</p>}
              {
                <p className="text-danger mt-2">
                  {error === "Invalid credentials"
                    ? "البريد الالكتروني او كلمة المرور غير صحيحة"
                    : "حدث خطأ ما"}
                </p>
              } */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
