import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  // Define validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("username should be an email")
      .required("field required"),
    password: Yup.string().required("field required"),
  });

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email</label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="emailError">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div id="pswError">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button type="submit" id="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
