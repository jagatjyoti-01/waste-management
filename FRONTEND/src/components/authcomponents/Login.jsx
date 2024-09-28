import { useState } from 'react';
import { useFormik } from 'formik';
import { loginschema } from '../../schema/schema';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Login = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/reset-email');
    };

    const [showPassword, setShowPassword] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickProfile = () => {
        setOpenProfile(!openProfile);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            profile: '',
        },
        validationSchema: loginschema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-green-600 mb-3 mt-20">The Future of E-Waste Management</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4 px-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full p-3 bg-white rounded-lg border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-green-300'} focus:outline-none`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                <div className="mb-4 relative px-2">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full p-3 bg-white rounded-lg border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-green-300'} focus:outline-none`}
                    />
                    <button
                        type="button"
                        onClick={handleClickShowPassword}
                        className="absolute top-3 right-4 text-gray-600 px-2"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                    )}
                </div>

                <div className="text-right mb-4 px-2">
                    <button type="button" onClick={handleOnClick} className="text-[#360076] cursor-pointer">
                        Forgot password?
                    </button>
                </div>

                {/* <div className="mb-4">
                    <select
                        name="profile"
                        value={formik.values.profile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full p-3 bg-white rounded-lg border ${formik.touched.profile && formik.errors.profile ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                    >
                        <option value="" disabled>Select Profile</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="parent">Parent</option>
                        <option value="investor">Investor</option>
                    </select>
                    {formik.touched.profile && formik.errors.profile && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.profile}</p>
                    )}
                </div> */}

                <button
                    type="submit"
                    className={`w-full p-3 mt-8 bg-green-600 text-white  rounded-lg  ${!(formik.isValid && formik.dirty) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!(formik.isValid && formik.dirty)}
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default Login;
