import React from "react";
import { NavLink } from "react-router-dom";
import "./sideNav.css";
import logo from "../../../images/Logo.png";
import userImage from "../../../images/user-photo.jpg";
const SideNav = () => {
  return (
    <div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <ul className="nav">
          <li className="nav-item nav-profile mt-2">
            <NavLink
              to="#"
              className="nav-link d-flex align-items-center  profile-toggle  justify-content-center gap-2"
            >
              <div className="nav-profile-image">
                <img src={userImage} alt="profile" />
                <span className="login-status online" />
                {/*change to offline or busy as needed*/}
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2 user_name">
                  حسن الشيات
                </span>
                <span className="text-secondary text-small user_role">
                  ادمن
                </span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
            </NavLink>
          </li>

    {/* Main Dashboard */}
    <li className="nav-item">
      <a className="nav-link" href="/">
        <i class="fa fa-home" aria-hidden="true"></i> 
        <span className="menu-title" style={{fontWeight:"700"}}>لوحة تحكم المشرف</span>
      </a>
    </li>
    
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="collapse" href="#users" aria-expanded="false" aria-controls="ui-basic">
      <i class="fa fa-users" aria-hidden="true"></i>
        <span className="menu-title" style={{fontWeight:"700"}}>المستخدمين</span>
        <i className="menu-arrow" style={{marginRight:"75px" }}/>
      </a>
      <div className="collapse" id="users">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item">
            <a className="nav-link" href="/admin/all-users">كل المستخدمين</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/add-user">اضافة مستخدم جديد</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
    </div>
  );
};

export default SideNav;
