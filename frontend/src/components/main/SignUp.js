import { ErrorMessage, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import avatar from "./photo/avatar.jpg";


const SignUp = () => {
  const navigate = useNavigate();

  const userForm = {
    name: "",
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  };

  // 2. Create a function for form submission
  const userSubmit = async (formdata) => {
    console.log(formdata);
    formdata.avatar=avatar;
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "User added successfully😁👍",
        icon: "success",
      });
      navigate("/login");
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
  };



  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required(" *Required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "), 
    username: Yup.string()
    .min(7, "Too Short!")
    .max(10, "Too Long!")
    .required(" *Required")
    .matches(/^[aA-zZ-Z0-9]+$/, "Username should be alphanumeric"),
    email: Yup.string().email("Invalid email").required(" *Required")
    .test("email", "Email already exists", async (value) => {
      const response = await fetch("http://localhost:5000/user/checkemail", {
        method: "POST",
        body: JSON.stringify({ email: value }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return false;
      } else {
        return true;
      }
    }),
    password: Yup.string()
      .required(" *Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        " *Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
      confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], ' *Passwords must match'),
  });
  return (
    <div className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-5 fw-bold ls-tight">
              Welcome <br />
              <span>to the SignUp Page</span>
            </h1>
            <p className="mb-4 opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <Formik
                  initialValues={userForm}
                  onSubmit={userSubmit}
                  validationSchema={SignupSchema}
                >
                  {({ values, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                          />
                          <div className="form-text text-danger">
                          <ErrorMessage   name="name" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="form-label" htmlFor="username">
                              Username
                            </label>
                            <input
                              type="text"
                              id="username"
                              className="form-control"
                              onChange={handleChange}
                              value={values.username}
                              onBlur={handleBlur}
                            />
                            <div className="form-text text-danger">
                            <ErrorMessage name="username" />
                            </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}
                        />
                        <div className="form-text text-danger">
                        <ErrorMessage  name="email" />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          onChange={handleChange}
                          value={values.password}
                          onBlur={handleBlur}
                        />
                        <div className="form-text text-danger">
                        <ErrorMessage  name="password" />
                        </div>
                      </div>

                      <div className="mb-5">
                        <label className="form-label" htmlFor="confirmpassword">
                         Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmpassword"
                          className="form-control"
                          onChange={handleChange}
                          value={values.confirmpassword}
                          onBlur={handleBlur}
                        />
                        <div className="form-text text-danger">
                        <ErrorMessage  name="confirmpassword" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4 "
                      >
                        Sign up
                      </button>

                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
