import React, { useState } from "react";
import Header from "../../../Components/Admin Components/header/Header";
import SideNav from "../../../Components/Admin Components/sideNav/SideNav";
import PageHeader from "../../../Components/Common/page header/PageHeader";
import { useNavigate } from "react-router-dom";

const CreateBooking = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client_name: "",
    client_phone: "",
    client_email: "",
    service_id: "",
    notes: "",
    payment_status: "Pending",
    booking_status: "Pending",
  });

  const [error, setError] = useState({});

  // Sample services data
  const services = [
    { id: 1, name: "Haircut" },
    { id: 2, name: "Manicure" },
    { id: 3, name: "Massage" },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here (e.g., check for empty fields)
    // Add your API call or logic for form submission
    if (formData.client_name === "") {
      setError({ ...error, client_name: "Client name is required" });
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <div>
      <Header />
      <div className="page-body-wrapper">
        <SideNav />
        <div className="add_user_container">
          <div style={{ marginTop: "30px" }}>
            <PageHeader name="إضافة حجز جديد" icon="fa fa-calendar-plus" />
          </div>
          <div className="row content-wrapper">
            <div className="col-12 stretch-card content-wrapper">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">نموذج إضافة حجز جديد</h4>
                  <p className="card-description">
                    الرجاء ملء الحقول التالية والتأكد من صحة البيانات قبل
                    التأكيد.
                  </p>
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="client_name">الاسم</label>
                        <input
                          type="text"
                          className="form-control"
                          id="client_name"
                          name="client_name"
                          value={formData.client_name}
                          onChange={handleChange}
                          placeholder="أدخل الاسم"
                        />
                        {error.client_name && (
                          <p className="text-danger">{error.client_name}</p>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="client_phone">الهاتف</label>
                        <input
                          type="text"
                          className="form-control"
                          id="client_phone"
                          name="client_phone"
                          value={formData.client_phone}
                          onChange={handleChange}
                          placeholder="أدخل الهاتف"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="client_email">البريد الإلكتروني</label>
                        <input
                          type="email"
                          className="form-control"
                          id="client_email"
                          name="client_email"
                          value={formData.client_email}
                          onChange={handleChange}
                          placeholder="أدخل البريد الإلكتروني"
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="service_id">الخدمة</label>
                        <select
                          className="form-control"
                          id="service_id"
                          name="service_id"
                          value={formData.service_id}
                          onChange={handleChange}
                        >
                          <option value="">اختر خدمة</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="payment_status">حالة الدفع</label>
                        <select
                          className="form-control"
                          id="payment_status"
                          name="payment_status"
                          value={formData.payment_status}
                          onChange={handleChange}
                        >
                          <option value="Pending">قيد الانتظار</option>
                          <option value="Paid">تم الدفع</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="booking_status">حالة الحجز</label>
                        <select
                          className="form-control"
                          id="booking_status"
                          name="booking_status"
                          value={formData.booking_status}
                          onChange={handleChange}
                        >
                          <option value="Pending">قيد الانتظار</option>
                          <option value="done">تمت</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="notes">ملاحظات</label>
                      <textarea
                        className="form-control"
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="أدخل ملاحظات إضافية"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        type="submit"
                        className="btn btn-gradient-primary"
                      >
                        حفظ
                      </button>
                      <button type="reset" onClick={() => navigate('/admin/bookings')} className="btn btn-gradient-danger">
                        إلغاء
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBooking;
