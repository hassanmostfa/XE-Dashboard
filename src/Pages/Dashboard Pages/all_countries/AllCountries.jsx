import React, { useState } from "react";
import Header from "../../../Components/Admin Components/header/Header";
import SideNav from "../../../Components/Admin Components/sideNav/SideNav";
import PageHeader from "../../../Components/Common/page header/PageHeader";
import img1 from "../../../images/Logo.png";
import { useNavigate } from "react-router-dom";
import AddCountriesForm from "./AddCountriesForm";
import "./countries.css";
const AllCountries = () => {
  const countries = [
    {
      id: 1,
      name: "السعودية",
      image: img1,
    },
  ];
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
    setShowPopup(false); // Close popup after submission
    // Here you can add the API call or other actions with form data
  };

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div>
      <Header />
      <div className="page-body-wrapper">
        <SideNav />
        <div className="add_user_container">
          <div style={{ marginTop: "30px" }}>
            <PageHeader name="كل البلاد" icon="fa fa-globe" />
          </div>
          <div className="add-country">
            <button className="btn add-btn btn-gradient-primary" onClick={openPopup}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>
                  &times;
                </button>
                <h4 className="card-title">نموذج اضافة بلد جديد</h4>
                <p className="card-description">
                  الرجاء ملء الحقول التالية والتأكد من صحة البيانات قبل التاكيد
                </p>

                {/* Use the CountryForm component and pass handleFormSubmit as onSubmit */}
                <AddCountriesForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          )}
          <div className="row content-wrapper">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="p-3">
                  <h3 className="latest_users mt-2 mb-3 text-center">
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                    كل البلاد
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                    <hr />
                  </h3>
                  <div className="table-responsive">
                    {/* {isLoading ? (
                            <div className="center-loader">
                                <div class="loader"></div>
                            </div>
                        ) : error ? (
                        <div>Error loading users</div> // Display error message if there is an error
                        ) : ( */}
                    <table className="table text-center table-hover">
                      <thead className="table-dark">
                        <tr style={{ fontWeight: "bold" }}>
                          <th>كود المستخدم</th>
                          <th> الاسم </th>
                          <th>الصوره</th>
                          <th> اجراء </th>
                        </tr>
                      </thead>
                      <tbody>
                        {countries.map((country) => (
                          <tr key={country.id}>
                            <td>{country.id} </td>{" "}
                            {/* Tracking ID as the user ID */}
                            <td>{country.name}</td>
                            <td>
                              <img
                                src={country.image}
                                alt="user"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </td>
                            <td>
                              <button
                                className="btn text-success"
                                title="تعديل"
                              >
                                <i
                                  className="fa fa-edit"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <button className="btn text-danger" title="حذف">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCountries;
