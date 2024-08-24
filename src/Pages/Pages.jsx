import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Components/auth/Login'
import Register from '../Components/auth/Register'
const pages = () => {
    return (
        <div className="pages">
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default pages