import React from "react";
import { NavLink } from "react-router-dom";
import photo from "./photo/profile.jpg";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <div id="preview" className="preview">
        <div style={{ display: "none" }}></div>
        <div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="overflow-hidden pt-0"
              data-v-271253ee=""
            >
              <section className="mb-10">
                <div
                  className="p-5 text-center bg-image"
                  style={{
                    background: " linear-gradient(to right, #005aa7, #fffde4)",
                    height: "60vh",
                  }}
                  aria-controls="#picker-editor"
                ></div>
                <div className="container">
                  <div
                    className="card mx-4 mx-md-5 text-center shadow-5-strong"
                    style={{
                      marginTop: "-170px",
                      background: "hsla(0, 0%, 100%, 0.7)",
                      backdropFilter: "blur(30px)",
                    }}
                  >
                    <div className="card-body px-4 py-5 px-md-5">
                      <div className="typewriter">
                        <Typewriter
                          options={{ autoStart: true, loop: true }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Welcome to the V2Blog.com")
                              .callFunction(() => {
                                console.log("String typed out!");
                              })
                              .pauseFor(2500)
                              .deleteAll()
                              .start();
                          }}
                        />
                      </div>
                      <NavLink
                        className="btn  btn-primary btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                        to="/login"
                        role="button"
                        aria-controls="#picker-editor"
                      >
                        Get started
                      </NavLink>{" "}
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div
            data-draggable="true"
            style={{ position: "relative" }}
            className="home-bg"
          >
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center">
                <h2 className="fw-bold mb-5">
                  <span className="me-1 text-white">
                    ABOUT&nbsp; &nbsp;<strong>V2Blog.com</strong>
                  </span>
                </h2>
                <div className="row">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <img
                      src={photo}
                      className="img-fluid h-50 -mt-5"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-7 mb-4 mb-lg-0">
                    <p className="mt-5 text-white">
                      V2Blog is a platform where you can convert your video into
                      blogs directly, you just need to upload your video and
                      then convert it into blog simply by clicking one buttton
                      and your video will be converted into blogs that your can
                      manage and also other people can see your blogs.
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10">
                <div className="card mb-3">
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-lg-4 d-none d-lg-flex">
                      {" "}
                      <img
                        src="https://blog.mynd.com/assets/images/Blog_DE/258/_900x600_crop_center-center_line/258_SK-Illu_Optimize-your-blog-with-video-This-is-how-you-do-it_01.webp"
                        alt="Home Image"
                        className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                        aria-controls="#picker-editor"
                      />{" "}
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body py-5 px-md-5">
                        <h2 className="fw-bold mb-4">
                          Features of your website.
                        </h2>
                        <p className="text-muted mb-4">
                          V2Blog Offer you to convert your video into blogs and
                          you can also manage your blogs and also you can see
                          other people blogs.
                        </p>
                        <div className="row mb-3">
                          <div className="col-lg-4 mb-2">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-success me-2"></i>
                              <span>Convert video to Blog.</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4 mb-2">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-success me-2"></i>
                              <span>Manage Video.</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4 mb-2">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-success me-2"></i>
                              <span>Manage Blogs</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4 mb-2">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-success me-2"></i>
                              <span>View Blogs.</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4 mb-2">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-success me-2"></i>
                              <span>Share Blogs.</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4 mb-2">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-success me-2"></i>
                              <span>Compatibility</span>{" "}
                            </p>
                          </div>
                        </div>{" "}
                        <NavLink
                          to="/signup"
                          className="btn btn-primary btn-lg px-5"
                        >
                          Signup Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 col-xl-8">
                    <h2 className="fw-bold mb-5">Testimonials</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                      {" "}
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                        alt=""
                        aria-controls="#picker-editor"
                      />{" "}
                    </div>
                    <h5 className="mb-3">Maria Smantha</h5>
                    <h6 className="text-primary mb-3">Web Developer</h6>
                    <p className="px-xl-3">
                      {" "}
                      <i className="fas fa-quote-left pe-2"></i>
                      <span>
                        V2Blog is a good and simple platform to convert your
                        video into blogs and also you can manage your blogs and
                        also you can see other people blogs.
                      </span>{" "}
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center mb-0">
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star-half-alt fa-sm text-warning"></i>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                      {" "}
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                        alt=""
                        aria-controls="#picker-editor"
                      />{" "}
                    </div>
                    <h5 className="mb-3">Lisa Cudrow</h5>
                    <h6 className="text-primary mb-3">Graphic Designer</h6>
                    <p className="px-xl-3">
                      {" "}
                      <i className="fas fa-quote-left pe-2"></i>
                      <span>
                        V2Blog me to convert the video into blog very simply and
                        easily, it is not a complex process.
                      </span>{" "}
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center mb-0">
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-0">
                    <div className="d-flex justify-content-center mb-4">
                      {" "}
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                        alt=""
                        aria-controls="#picker-editor"
                      />{" "}
                    </div>
                    <h5 className="mb-3">John Smith</h5>
                    <h6 className="text-primary mb-3">Marketing Specialist</h6>
                    <p className="px-xl-3">
                      {" "}
                      <i className="fas fa-quote-left pe-2"></i>
                      <span>
                        I am a content creator and i have problem in writing
                        blogs, this platform helps me in doing the work simply
                        and easily.
                      </span>{" "}
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center mb-0">
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-star fa-sm text-warning"></i>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="far fa-star fa-sm text-warning"></i>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <footer
              className="text-center text-white"
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <div className="container pt-4">
                <section className="mb-4">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.facebook.com/profile.php?id=100087793143882"
                    role="button"
                    data-mdb-ripple-color="dark"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-google" />
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-github" />
                  </a>
                </section>
              </div>
              <div
                className="text-center text-dark p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                © 2020 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">
                  V2Blogs.com
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
