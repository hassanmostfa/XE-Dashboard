import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Components/auth/Login'
import Dashboard from './Dashboard Pages/dashboard/Dashboard'
import Protected from '../Components/Common/Protected'
import AddUser from '../Pages/Dashboard Pages/Add User/AddUser'
import AllUsers from './Dashboard Pages/all users/AllUsers'
import AllCountries from './Dashboard Pages/all_countries/AllCountries'
import Services from './Dashboard Pages/services/Services'
import AddService from './Dashboard Pages/services/AddService'
import Messages from './Dashboard Pages/messages/Messages'
import Bookings from './Dashboard Pages/bookings/Bookings'
import AddBooking from './Dashboard Pages/bookings/AddBooking'
import Transactions from './Dashboard Pages/transactions/Transactions'
const pages = () => {
    return (
        <div className="pages">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Protected Cmp={Login} />} />
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/admin/add-user" element={<AddUser/>} />
                    <Route path="/admin/all-users" element={<AllUsers/>} />
                    <Route path='/admin/all-countries' element={<AllCountries/>} />
                    <Route path='/admin/services' element={<Services/>} />
                    <Route path='/admin/add-service' element={<AddService/>} />
                    <Route path="/admin/messages" element={<Messages/>} />
                    <Route path="/admin/bookings" element={<Bookings/>} />
                    <Route path="/admin/add-booking" element={<AddBooking/>} />
                    <Route path="/admin/transactions" element={<Transactions/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default pages

