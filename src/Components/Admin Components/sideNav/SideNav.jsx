import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sideNav.css";
import logo from "../../../images/Logo.png";
import userImage from "../../../images/user-photo.jpg";
const SideNav = () => {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile mt-2">
            <NavLink className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
              {/* <Link className="navbar-brand brand-logo" to="#"><img src={logo} alt="logo" /></Link> */}
              {/* <Link className="navbar-brand brand-logo-mini" to="#"><img src={logo} alt="logo" /></Link> */}
              <Link className="navbar-brand brand-logo" to="#">
                <img
                  src="https://xealkhalej.com/wp-content/uploads/2024/02/logo.webp"
                  alt="logo"
                  style={{
                    width: "100%",
                    margin: "10px auto",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </NavLink>
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
            <Link className="nav-link" to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
              <span className="menu-title" style={{ fontWeight: "700" }}>
                لوحة تحكم المشرف
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link justify-content-between"
              data-bs-toggle="collapse"
              to="#countries"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <div>
                <i class="fa fa-globe" aria-hidden="true"></i>
                <span className="menu-title" style={{ fontWeight: "700" }}>
                  البلاد
                </span>
              </div>
              <i className="menu-arrow" style={{ marginRight: "75px" }} />
            </Link>
            <div className="collapse" id="countries">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/all-countries">
                    كل البلاد
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <Link
              className="nav-link justify-content-between"
              data-bs-toggle="collapse"
              to="#services"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <div>
                <i class="fa fa-cogs" aria-hidden="true"></i>
                <span className="menu-title" style={{ fontWeight: "700" }}>
                  الخدمات
                </span>
              </div>
              <i className="menu-arrow" style={{ marginRight: "75px" }} />
            </Link>
            <div className="collapse" id="services">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/services">
                    كل الخدمات
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/add-service">
                     اضافة خدمة
                  </Link>
                </li>

              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link justify-content-between"
              data-bs-toggle="collapse"
              to="#bookings"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <div>
                <i class="fa fa-cogs" aria-hidden="true"></i>
                <span className="menu-title" style={{ fontWeight: "700" }}>
                  الحجوزات
                </span>
              </div>
              <i className="menu-arrow" style={{ marginRight: "75px" }} />
            </Link>
            <div className="collapse" id="bookings">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/bookings">
                    كل الحجوزات
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/add-booking">
                     اضافة حجز
                  </Link>
                </li>

              </ul>
            </div>
          </li>
          <li className="nav-item">
              <Link to={'/admin/transactions'} className="nav-link">
                <i class="fa fa-money" aria-hidden="true"></i>
                <span className="menu-title" style={{ fontWeight: "700" }}>
                  المعاملات
                </span>
              </Link>
          </li>
          <li className="nav-item">
              <Link to={'/admin/messages'} className="nav-link">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span className="menu-title" style={{ fontWeight: "700" }}>
                  الرسائل
                </span>
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <span>
              <i className="mdi mdi-logout me-2 text-primary mx-2" />
              تسجيل الخروج
            </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
