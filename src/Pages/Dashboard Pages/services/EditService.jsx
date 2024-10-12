import React, { useState, useEffect } from "react";
import Header from "../../../Components/Admin Components/header/Header";
import SideNav from "../../../Components/Admin Components/sideNav/SideNav";
import PageHeader from "../../../Components/Common/page header/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCountriesQuery } from "../../../api/countriesSlice";
import { useGetServiceByIdQuery, useUpdateServiceMutation } from "../../../api/servicesSlice";

const EditService = () => {
    const { data: countries } = useGetCountriesQuery();
    const navigate = useNavigate();
    const { id: serviceId } = useParams();
    
    const { data: service, isLoading } = useGetServiceByIdQuery(serviceId);
    const [updateService, { isLoading: isUpdating, error: updateError }] = useUpdateServiceMutation();
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

    useEffect(() => {
        if (service && !isLoading) {
            setFormData({
                title: service.title,
                country_id: service.country_id,
                image: "",
                price: service.price,
                description: service.description,
                feature1_title: service.feature1_title,
                feature1_description: service.feature1_description,
                feature2_title: service.feature2_title,
                feature2_description: service.feature2_description,
                feature3_title: service.feature3_title,
                feature3_description: service.feature3_description,
                feature4_title: service.feature4_title,
                feature4_description: service.feature4_description,
            });
        }
    }, [service, isLoading]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateService({ id: serviceId, ...formData }).unwrap();
            navigate("/admin/services"); // Navigate back to services list on success
        } catch (error) {
            console.error("Failed to update service:", error);
            // You can set error state if you want to show error messages
        }
    };

    return (
        <div>
            <Header />
            <div className="page-body-wrapper">
                <SideNav />
                <div className="add_user_container">
                    <div style={{ marginTop: "30px" }}>
                        <PageHeader name="تعديل خدمة" icon="fa fa-edit" />
                    </div>
                    <div className="col-12 grid-margin stretch-card content-wrapper">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <i className="mdi mdi-account-plus"></i> نموذج تعديل خدمة
                                </h4>
                                <p className="card-description">
                                    الرجاء ملء الحقول التالية والتأكد من صحة البيانات قبل التأكيد
                                </p>
                                <form className="forms-sample" onSubmit={handleSubmit}>
                                    <div className="form-group col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="title">الاسم</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="title"
                                                    placeholder="ادخل الاسم"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    name="title"
                                                    required
                                                />
                                                {updateError && <p className="text-danger">{updateError.data?.errors.title}</p>}
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="price">السعر</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="price"
                                                    placeholder="ادخل السعر"
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                    name="price"
                                                    required
                                                />
                                                {updateError && <p className="text-danger">{updateError.data?.errors.price}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="image">الصورة</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="image"
                                                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                                                    name="image"
                                                />
                                                {updateError && <p className="text-danger">{updateError.data?.errors.image}</p>}
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="country_id"> اختر الدولة </label>
                                                <select
                                                    dir="ltr"
                                                    className="form-control form-select"
                                                    value={formData.country_id}
                                                    onChange={handleChange}
                                                    name="country_id"
                                                    required
                                                >
                                                    <option value="" disabled>اختر الدولة</option>
                                                    {countries && countries.map((country) => (
                                                        <option key={country.id} value={country.id}>
                                                            {country.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {updateError && <p className="text-danger">{updateError.data?.errors.country_id}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">الوصف</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="ادخل الوصف"
                                            onChange={handleChange}
                                            name="description"
                                            value={formData.description}
                                            required
                                        />
                                        {updateError && <p className="text-danger">{updateError.data?.errors.description}</p>}
                                    </div>
                                    
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature1_title">الميزة 1</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="feature1_title"
                                                placeholder="ادخل الميزة"
                                                value={formData.feature1_title}
                                                onChange={handleChange}
                                                name="feature1_title"
                                            />
                                            {updateError && <p className="text-danger">{updateError.data?.errors.feature1_title}</p>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature1_description">وصف الميزة 1</label>
                                            <textarea
                                                name="feature1_description"
                                                className="form-control"
                                                onChange={handleChange}
                                                id="feature1_description"
                                                value={formData.feature1_description}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature2_title">الميزة 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="feature2_title"
                                                placeholder="ادخل الميزة"
                                                value={formData.feature2_title}
                                                onChange={handleChange}
                                                name="feature2_title"
                                            />
                                            {updateError && <p className="text-danger">{updateError.data?.errors.feature2_title}</p>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature2_description">وصف الميزة 2</label>
                                            <textarea
                                                name="feature2_description"
                                                className="form-control"
                                                onChange={handleChange}
                                                id="feature2_description"
                                                value={formData.feature2_description}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature3_title">الميزة 3</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="feature3_title"
                                                placeholder="ادخل الميزة"
                                                value={formData.feature3_title}
                                                onChange={handleChange}
                                                name="feature3_title"
                                            />
                                            {updateError && <p className="text-danger">{updateError.data?.errors.feature3_title}</p>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature3_description">وصف الميزة 3</label>
                                            <textarea
                                                name="feature3_description"
                                                className="form-control"
                                                onChange={handleChange}
                                                id="feature3_description"
                                                value={formData.feature3_description}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature4_title">الميزة 4</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="feature4_title"
                                                placeholder="ادخل الميزة"
                                                value={formData.feature4_title}
                                                onChange={handleChange}
                                                name="feature4_title"
                                            />
                                            {updateError && <p className="text-danger">{updateError.data?.errors.feature4_title}</p>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlFor="feature4_description">وصف الميزة 4</label>
                                            <textarea
                                                name="feature4_description"
                                                className="form-control"
                                                onChange={handleChange}
                                                id="feature4_description"
                                                value={formData.feature4_description}
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-gradient-primary me-2"
                                            disabled={isUpdating}
                                        >
                                            {"تحديث"}
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

export default EditService;
