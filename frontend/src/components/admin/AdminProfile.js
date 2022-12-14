import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../main/Loading";
import "./adminprofile.css";

const AdminProfile = () => {

  const [profileData, setProfileData] = useState("");
  const [loading, setLoading] = useState(false);
  const [selImage, setSelImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [currrentUser, setCurrrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )

  const id = currrentUser._id;

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/user/getbyid/" + id);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setProfileData(data);
      setLoading(false);
    }
  };

  const uploadProfile = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image uploaded successfully");
        console.log("uploaded");
      }
    });
  };

  const updateProfile = async (formdata) => {
    formdata.avatar = selImage;
    const response = await fetch("http://localhost:5000/user/update/"+id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
    });
    if (response.status === 200) {
        toast.success("Profile updated successfully");
        getDataFromBackend();
    }
    };


  const displayProfile = () => {
    if (loading) {
      return <Loading></Loading>;
    } else {
      return (
        <div className="container bg-adminprofile ">
        <div className="row  bg-adminprofile-card">
          <h1 className="text-center text-light">Manage Profile</h1>
          <div className="col-md-6 mt-2">
            <div className="card w-75 ">{selImage==""?
              <img src={"http://localhost:5000/" + profileData.avatar} className="card-img-top img-fluid" alt="..." />:
              <img src={profileData.avatar} className="card-img-top" alt="..." />}
                <input type="file" className="form-control" onChange={uploadProfile}  accept={
                  "image/png, image/jpeg, image/jpg"
                }/>
            </div>
          </div>
          <div className="col-md-6">
            <Formik 
            initialValues={profileData}
            onSubmit={updateProfile}
            >
                {({values, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="name" className="form-label text-light">Name</label>
                            <input type="text" className="form-control" name="name" value={values.name} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email" className="form-label text-light">Email</label>
                            <input type="text" className="form-control" name="email" value={values.email} onChange={handleChange} disabled/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="username" className="form-label text-light">Username</label>
                            <input type="text" className="form-control" name="username" id="username" value={values.username} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="password" className="form-label text-light">Password</label>
                            <input type="password" className="form-control" name="address" value={values.password} onChange={handleChange} disabled/>
                        </div>
                        <div className="mt-4">
                        <button type="submit" className="btn btn-primary form-control">Update</button>
                        </div>
                        </form>
                )}
            </Formik>
          </div>
        </div>
        </div>
      );
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return <div >
    {displayProfile()}
    </div>;
};

export default AdminProfile;
