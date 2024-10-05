import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import adminImage from '../../../images/admin-photo.png'
import logo from '../../../images/Logo.png'
const Header = () => {

  let name = JSON.parse(localStorage.getItem('user')).name  

  // Logout Function
  const logout = () => {
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload()
    window.location.href = '/login'
  }
  return (
    <div>

      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
    {/* <Link className="navbar-brand brand-logo" to="#"><img src={logo} alt="logo" /></Link> */}
    {/* <Link className="navbar-brand brand-logo-mini" to="#"><img src={logo} alt="logo" /></Link> */}
    <Link className="navbar-brand brand-logo" to="#"><img src="https://xealkhalej.com/wp-content/uploads/2024/02/logo.webp" alt="logo" /></Link>
  </div>
  <div className="navbar-menu-wrapper d-flex align-items-center justify-content-around">
    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span className="mdi mdi-menu" />
    </button>
    <div className="search-field d-none d-md-block">
      <form className="d-flex align-items-center h-100" action="#">
        <div className="input-group">
          <input type="text" className="form-control bg-transparent border-0" placeholder="ابحث " />
          <div className="input-group-prepend bg-transparent">
            <i className="input-group-text border-0 mdi mdi-magnify" />
          </div>
        </div>
      </form>
    </div>
    <ul className="navbar-nav navbar-nav-left m-0">

      {/* profile dropdown */}
      <li className="nav-item nav-profile dropdown">
        <Link className="nav-link dropdown-toggle" id="profileDropdown" to="#" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="nav-profile-img" >
            <img src={adminImage} alt="user profile"/>
            <span className="availability-status online" />
          </div>
          <div className="nav-profile-text mx-2">
            <p className="mb-1 text-black">{name}</p>
          </div>
        </Link>
        <div className="dropdown-menu navbar-dropdown"  style={{right:"-10px"  , width:"210px"}} aria-labelledby="profileDropdown">
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="#">
            <i className="mdi mdi-logout me-2 text-primary mx-2" />
             حسابي الشخصي 
          </Link>
          <Link className="dropdown-item" to="#">
            <i className="mdi mdi-logout me-2 text-primary mx-2" />
             شاشة القفل 
          </Link>
          <Link className="dropdown-item" to="#" onClick={logout}>
            <i className="mdi mdi-logout me-2 text-primary mx-2" />
            تسجيل الخروج 
          </Link>
        </div>
      </li>
      {/* profile dropdown end */}


      <li className="nav-item d-none d-lg-block full-screen-link">
        <Link className="nav-link">
          <i className="mdi mdi-fullscreen" id="fullscreen-button" />
        </Link>
      </li>


      {/* message dropdown */} 
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="mdi mdi-email-outline" />
          <span className="count-symbol bg-warning" />
        </a>
        <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" style={{right:"-170px"}} aria-labelledby="messageDropdown">
          <h6 className="p-3 mb-0 text-center">الرسائل</h6>
          <div className="dropdown-divider" />
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src={adminImage} alt="image" className="profile-pic" />
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">ارسل حسن اليك رسالة نصية</h6>
              <p className="text-gray mb-0"> منذ 4 ساعات </p>
            </div>
          </a>
          <div className="dropdown-divider" />
          <h6 className="p-3 mb-0 text-center">4 رسائل جديدة</h6>
        </div>
      </li>
      {/* message dropdown */}

      

      {/* notification dropdown */}
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
          <i className="mdi mdi-bell-outline" style={{color:"var(--main-color)"}} />
          <span className="count-symbol bg-danger" />
        </a>
        <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" style={{right:"-170px"}} aria-labelledby="notificationDropdown">
          <h6 className="p-3 mb-0 text-center">الاشعارات</h6>
          <div className="dropdown-divider" />
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-success">
                <i className="mdi mdi-calendar" />
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
              <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
            </div>
          </a>
          <div className="dropdown-divider" />
          <h6 className="p-3 mb-0 text-center">شاهد كل الاشعارات</h6>
        </div>
      </li>
      {/* notification dropdown */}


    </ul>
    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="mdi mdi-menu" />
    </button>
  </div>
</nav>

    </div>
  )
}

export default Header