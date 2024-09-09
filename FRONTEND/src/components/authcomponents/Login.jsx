import React from 'react';
import { useFormik } from 'formik';
import { loginschema } from '../schema/schema';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginschema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="w-full max-w-md mx-auto ">
            <h4 className="text-green-600 font-bold text-xl text-center my-3 md:mb-10">
                Welcome to E-waste Management
            </h4>
            <form onSubmit={formik.handleSubmit} className="space-y-4 ">
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className={`w-full p-3 border rounded-lg ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} bg-white`}
                        placeholder="Email"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}
                </div>
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className={`w-full p-3 border rounded-lg ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} bg-white`}
                        placeholder="Password"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-sm">{formik.errors.password}</p>
                    )}
                </div>
                <p className="text-right text-[#360076] cursor-pointer mb-4">
                    Forgot password?
                </p>
                <button
                    type="submit"
                    className="w-full bg-[#28735A] text-white py-2 rounded-lg mt-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
