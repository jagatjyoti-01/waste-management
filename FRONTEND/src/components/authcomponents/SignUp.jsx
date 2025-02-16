import React, { useState } from 'react';
import { useFormik } from 'formik';
import { signUpschema } from '../../schema/schema';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function SignUp() {
    const roles = ["Teacher", "Student", "Investor", "Guardian"];
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Manage form state manually
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        formik.setFieldValue(name, value); // Synchronize with Formik
    };
    console.log(data)

    const formik = useFormik({
        initialValues: data,
        validationSchema: signUpschema,
        onSubmit: (values) => {
            console.log('Submitted values:', values);
        },
    });

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold text-center text-green-600 mb-2">
                Transforming E-Waste into a Sustainable Future
            </h1>
            <p className="text-center text-gray-500 mb-6">
                Create your account and Recycle wastee
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={handleOnChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg ${
                            formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-green-300'
                        }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleOnChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg ${
                            formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-green-300'
                        }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={handleOnChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg ${
                            formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-green-300'
                        }`}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-2 text-green-600"
                        onClick={handleClickShowPassword}
                    >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Re-enter Password"
                        value={data.confirmPassword}
                        onChange={handleOnChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg ${
                            formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-green-300'
                        }`}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-2 text-gray-600"
                        onClick={handleClickShowConfirmPassword}
                    >
                        {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                    )}
                </div>

                <div>
                    <select
                        name="role"
                        value={data.role}
                        onChange={handleOnChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 border rounded-lg ${
                            formik.touched.role && formik.errors.role ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                        <option value="" disabled>
                            Select your role
                        </option>
                        {roles.map((role, index) => (
                            <option key={index} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    {formik.touched.role && formik.errors.role && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.role}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 bg-green-600 text-white rounded-lg mt-4 ${
                        !(formik.isValid && formik.dirty) ? 'bg-gray-200' : 'hover:bg-green-700'
                    }`}
                    disabled={!(formik.isValid && formik.dirty)}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignUp;
