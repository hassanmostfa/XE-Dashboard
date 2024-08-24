import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Components/auth/Login'
import Register from '../Components/auth/Register'
import Test from '../Components/Common/Test'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Protected from '../Components/Common/Protected'
const pages = () => {
    return (
        <div className="pages">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/test" element={<Protected Cmp={Test} />} />
                    <Route path="/user/home" element={<Protected Cmp={Home} />} />
                    <Route path="/dashboard" element={<Protected Cmp={Dashboard} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default pages

