import React from 'react'
import Header from '../../../Components/Admin Components/header/Header';
import SideNav from '../../../Components/Admin Components/sideNav/SideNav';
import img1 from "../../../images/Logo.png";
import PageHeader from '../../../Components/Common/page header/PageHeader';

const Services = () => {
    const countries = [
        {
          id: 1,
          country_id: 1,
          title: "driver",
          image: img1,
          description: "description",
          price:200
        },
      ];
  return (
    <div>
    <Header />
    <div className="page-body-wrapper">
      <SideNav />
      <div className="add_user_container">
        <div style={{ marginTop: "30px" }}>
          <PageHeader name=" الخدمات" icon="fa fa-cogs" />
        </div>
        <div className="row content-wrapper">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="p-3">
                <h3 className="latest_users mt-2 mb-3 text-center">
                  <i
                    className="fa fa-angle-double-left"
                    aria-hidden="true"
                  ></i>
                  كل الخدمات
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
                        <th>الوصف</th>
                        <th>السعر</th>
                        <th>الصوره</th>
                        <th> اجراء </th>
                      </tr>
                    </thead>
                    <tbody>
                      {countries.map((country) => (
                        <tr key={country.id}>
                          <td>{country.id} </td>{" "}
                          {/* Tracking ID as the user ID */}
                          <td>{country.title}</td>
                          <td>{country.description}</td>
                          <td>{country.price}</td>
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
  )
}

export default Services
