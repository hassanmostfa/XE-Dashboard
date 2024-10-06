import React, { useState } from "react";
import Header from "../../../Components/Admin Components/header/Header";
import SideNav from "../../../Components/Admin Components/sideNav/SideNav";
import PageHeader from "../../../Components/Common/page header/PageHeader";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    country_id: "",
    image: "",
    price: "",
    description: "",
    feature1_title: "",
    feature1_description: "",
    feature2_title: "",
    feature2_description: "",
    feature3_title: "",
    feature3_description: "",
    feature4_title: "",
    feature4_description: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <div>
      <Header />
      <div className="page-body-wrapper">
        <SideNav />
        <div className="add_user_container">
          <div style={{ marginTop: "30px" }}>
            <PageHeader name="اضافة خدمة" icon="fa fa-plus" />
          </div>
          <div className="col-12 grid-margin stretch-card content-wrapper">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="mdi mdi-account-plus"></i> نموذج اضافة خدمة جديد
                </h4>
                <p className="card-description">
                  {" "}
                  الرجاء ملء الحقول التالية والتاكد من صحة البيانات قبل التاكيد{" "}
                </p>
                <form className="forms-sample" onSubmit={handleSubmit}>
                  <div className="form-group col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="exampleInputName1">الاسم</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          placeholder="ادخل الاسم"
                          value={formData.name}
                          onChange={handleChange}
                          name="title"
                        />
                        {error && <p className="text-danger">{error.name}</p>}
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="exampleInputName1">السعر</label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputName1"
                          placeholder="ادخل السعر"
                          value={formData.price}
                          onChange={handleChange}
                          name="price"
                        />
                        {error && <p className="text-danger">{error.price}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="form-group col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="exampleInputEmail3">الصورة</label>
                        <input
                          type="file"
                          className="form-control"
                          id="exampleInputEmail3"
                          placeholder="اختر الصورة"
                          value={formData.image}
                          onChange={handleChange}
                          name="image"
                        />

                        {error && <p className="text-danger">{error.image}</p>}
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="exampleInputName1"> اختر الدولة </label>
                        <select
                          dir="ltr"
                          className="form-control form-select"
                          value={formData.country_id}
                          onChange={handleChange}
                          name="country_id"
                        >
                          <option value="" disabled selected>
                            اختر الدولة
                          </option>
                          <option value="1">مصر</option>
                          <option value="2">السعودية</option>
                          <option value="3">الامارات</option>
                        </select>
                        {error && (
                          <p className="text-danger">{error.country}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword4">الوصف</label>
                    <textarea
                      className="form-control"
                      placeholder="ادخل الوصف"
                      onChange={handleChange}
                      name="description"
                    >
                      {formData.description}
                    </textarea>
                    {error && (
                      <p className="text-danger">{error.description}</p>
                    )}
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-6">
                        <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="exampleInputName1">الميزة 1</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="ادخل الميزة"
                            value={formData.feature1_title}
                            onChange={handleChange}
                            name="feature1_title"
                            />
                            {error && (
                            <p className="text-danger">{error.feature1_title}</p>
                            )}
                        </div>
                        <div className="col-sm-12 mt-3">
                            <label htmlFor="exampleInputName1"> وصف الميزة 1</label>
                            <textarea
                            name="feature1_description"
                            className="form-control"
                            onChange={handleChange}
                            id=""
                            >{formData.feature1_description}</textarea>
                        </div>
                        </div>
                    </div>
                    <div className="form-group col-sm-6 ">
                        <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="exampleInputName1">الميزة 2</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="ادخل الميزة"
                            value={formData.feature2_title}
                            onChange={handleChange}
                            name="feature2_title"
                            />
                            {error && (
                            <p className="text-danger">{error.feature2_title}</p>
                            )}
                        </div>
                        <div className="col-sm-12 mt-3">
                            <label htmlFor="exampleInputName1"> وصف الميزة 2</label>
                            <textarea
                            name="feature2_description"
                            className="form-control"
                            onChange={handleChange}
                            id=""
                            >{formData.feature2_description}</textarea>
                        </div>
                        </div>
                    </div>
                    <div className="form-group col-sm-6 ">
                        <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="exampleInputName1">الميزة 3</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="ادخل الميزة"
                            value={formData.feature3_title}
                            onChange={handleChange}
                            name="feature3_title"
                            />
                            {error && (
                            <p className="text-danger">{error.feature3_title}</p>
                            )}
                        </div>
                        <div className="col-sm-12 mt-3">
                            <label htmlFor="exampleInputName1"> وصف الميزة 3</label>
                            <textarea
                            name="feature3_description"
                            className="form-control"
                            onChange={handleChange}
                            id=""
                            >{formData.feature3_description}</textarea>
                        </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="exampleInputName1">الميزة 4</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="ادخل الميزة"
                            value={formData.feature4_title}
                            onChange={handleChange}
                            name="feature4_title"
                            />
                            {error && (
                            <p className="text-danger">{error.feature4_title}</p>
                            )}
                        </div>
                        <div className="col-sm-12 mt-3">
                            <label htmlFor="exampleInputName1"> وصف الميزة 4</label>
                            <textarea
                            name="feature4_description"
                            className="form-control "
                            onChange={handleChange}
                            id=""
                            >{formData.feature4_description}</textarea>
                        </div>
                        </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      type="submit"
                      className="btn btn-gradient-primary me-2"
                    >
                      {"انشاء"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/admin/services");
                      }}
                      className="btn btn-gradient-danger"
                    >
                      الغاء
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
