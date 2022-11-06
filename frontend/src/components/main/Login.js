import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import "./Login.css";

const Login = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();


  const userSubmit = async (formdata) => {
    console.log(formdata);
    const res = await fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      console.log("success");
      const data = await res.json();
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Wellcome!!👌",
        text: "Enter a new World!!",
      });
      sessionStorage.setItem("user", JSON.stringify(data));
      if(data.isAdmin===true){
        navigate("/admin/dashboard");
      }else{
        navigate("/user/videomanager/"+data._id);
      }
        
    } else {
      console.log("Login error ");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "Check your email and password!!",
      });
    }
  };



  return (
    <div className="bodi">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 main">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mainF">
                      <div className=" boxes">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form1Example13">
                            Email address
                          </label>
                        </div>
                      </div>

                      <div className=" boxes">
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form1Example23">
                            Password
                          </label>
                        </div>
                      </div>
                        <NavLink className="secondary" to="#!">Forgot password?</NavLink>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block sbtn mt-3"
                      >
                        Sign in
                      </button>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted" style={{color: "white"}}>
                        OR
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
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
      </section>
    </div>
  );
};

export default Login;
