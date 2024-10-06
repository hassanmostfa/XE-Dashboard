import React from 'react'
import Header from '../../../Components/Admin Components/header/Header';
import SideNav from '../../../Components/Admin Components/sideNav/SideNav';
import img1 from "../../../images/Logo.png";
import PageHeader from '../../../Components/Common/page header/PageHeader';

const Bookings = () => {
    const bookings = [
        {
          id: 1,
          client_name: 1,
          client_phone: "0152120",
          service: "service",
          payment_status: "paid",
          booking_status: "pending",
          created_at: "1-1-2022",
        },
        {
          id: 2,
          client_name: 1,
          client_phone: "0152120",
          service: "service",
          payment_status: "pending",
          booking_status: "done",
          created_at: "1-1-2022",
        }
      ];
  return (
    <div>
    <Header />
    <div className="page-body-wrapper">
      <SideNav />
      <div className="add_user_container">
        <div style={{ marginTop: "30px" }}>
          <PageHeader name=" الحجوزات" icon="fa fa-cogs" />
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
                  كل الحجوزات
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
                        <th> اسم العميل </th>
                        <th>الخدمه</th>
                        <th>حالة الدفع</th>
                        <th>حالة الحجز</th>
                        <th>تاريخ الحجز</th>
                        <th> اجراء </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td>{booking.id} </td>{" "}
                          {/* Tracking ID as the user ID */}
                          <td>{booking.client_name}</td>
                          <td>{booking.service}</td>
                          <td>{booking.payment_status == "paid" ? <span className='badge badge-success'>Paid</span> : <span className='badge badge-warning'>Pending</span>}</td>
                          <td>{booking.booking_status == "done" ? <span className='badge badge-success'>Done</span> : <span className='badge badge-warning'>Pending</span>}</td>
                          <td>{booking.created_at}</td>
                          
                          <td>
                            <button
                              className="btn text-success"
                              title="تعديل"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <button
                              className="btn text-info"
                              title="عرض"
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

export default Bookings
