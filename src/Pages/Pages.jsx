import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Components/auth/Login'
import Register from '../Components/auth/Register'
import Test from '../Components/Common/Test'
import Dashboard from './Dashboard Pages/dashboard/Dashboard'
import Protected from '../Components/Common/Protected'
import AddUser from '../Pages/Dashboard Pages/Add User/AddUser'
import AllUsers from './Dashboard Pages/all users/AllUsers'
const pages = () => {
    return (
        <div className="pages">
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Protected Cmp={Login} />} />
                    <Route path="/test" element={<Protected Cmp={Test} />} />
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/admin/add-user" element={<AddUser/>} />
                    <Route path="/admin/all-users" element={<AllUsers/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default pages

