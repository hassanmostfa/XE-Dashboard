import React, { useState } from 'react';
import Header from '../../../Components/Admin Components/header/Header';
import SideNav from '../../../Components/Admin Components/sideNav/SideNav';
import PageHeader from '../../../Components/Common/page header/PageHeader';
import './messages.css'; // Assuming you want to add styles

const Messages = () => {
  const [showPopup, setShowPopup] = useState(false); // For controlling popup visibility
  const [selectedMessage, setSelectedMessage] = useState(null); // To store the selected message data

  const messagesData = [
    {
      id: 1,
      name: 'ahmed attia',
      phone: '010254002355',
      message: 'This is a detailed message from the user.',
    },
  ];

  const openPopup = (message) => {
    setSelectedMessage(message); // Set the selected message
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
    setSelectedMessage(null); // Clear selected message
  };

  return (
    <div className='messages'>
      <Header />
      <div className="page-body-wrapper">
        <SideNav />
        <div className="add_user_container">
          <div style={{ marginTop: '30px' }}>
            <PageHeader name="الرسائل" icon="fa fa-envelope" />
          </div>
          <div className="row content-wrapper">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="p-3">
                  <h3 className="latest_users mt-2 mb-3 text-center">
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                    كل الرسائل
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    <hr />
                  </h3>
                  <div className="table-responsive">
                    <table className="table text-center table-hover">
                      <thead className="table-dark">
                        <tr style={{ fontWeight: 'bold' }}>
                          <th>كود المستخدم</th>
                          <th>الاسم</th>
                          <th>الرسالة</th>
                          <th>الهاتف</th>
                          <th>اجراء</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messagesData.map((message) => (
                          <tr key={message.id}>
                            <td>{message.id}</td>
                            <td>{message.name}</td>
                            <td>{message.message.slice(0, 20)}</td>
                            <td>{message.phone}</td>
                            <td>
                              <button
                                className="btn text-info"
                                title="عرض"
                                onClick={() => openPopup(message)} // Open popup with message data
                              >
                                <i className="fa fa-eye" aria-hidden="true"></i>
                              </button>
                              <button className="btn text-danger" title="حذف">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for viewing detailed message */}
      {showPopup && selectedMessage && (
        <div className="popup-overlay">
          <div className="popup-content ">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <h4>تفاصيل الرسالة</h4>
            <p className='mt-2'><strong>الاسم:</strong> {selectedMessage.name}</p>
            <p ><strong>الهاتف:</strong> {selectedMessage.phone}</p>
            <p ><strong>الرسالة:</strong> {selectedMessage.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
