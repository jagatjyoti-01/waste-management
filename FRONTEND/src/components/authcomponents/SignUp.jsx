import React from "react";
import { useFormik } from "formik";
import { signUpschema } from "../schema/schema";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpschema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto p-4 mt-6  md:mt-12  ">
      <h5 className="text-green-600 font-bold text-xl text-center md:mt-8 mt-2 ">
        Welcome to E-Waste Management
      </h5>
      <h6 className="text-[#746283] font-normal text-sm md:text-lg text-center mb-4">
        Transfoering E-Waste into Environmental Impact{" "}
      </h6>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="relative ">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Full Name"
            className={`w-full p-3 border  rounded-lg ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            } bg-white`}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            className={`w-full p-3 border rounded-lg ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } bg-white`}
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
            placeholder="Password"
            className={`w-full p-3 border rounded-lg ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } bg-white`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="Re-enter Password"
            className={`w-full p-3 border rounded-lg ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300"
            } bg-white`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#28735A] text-white py-2 rounded-lg mt-2"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
