import { Button, IconButton } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../main/Loading";


const AddVideo = ({getDataFromBackend}) => {

  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )
  const [loading, setLoading] = useState(false);
  const userForm = {
    title: "",
    description: "",
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Video uploaded successfully");
        console.log("uploaded");
      }
    });
  };

  const uploadImage = (e) => {
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


  const userSubmit = async (formdata) => {
    setLoading(true);
    formdata.thumbnail = selImage;
    formdata.file = selFile;
    formdata.user = currentUser._id;
    console.log(formdata);
    const response = await fetch("http://localhost:5000/video/add", {
      method: "POST",
      body: JSON.stringify(formdata), 
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "Video added successfully😁👍",
        icon: "success",
      });
      // window.location.reload();
      getDataFromBackend();
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
    setLoading(false);
  };

  return (
    <div className="container-fluid">
          <div className="card mt-5 w-50 mx-auto">
        <h1 className="text-center mt-2">Add Video</h1>
      <Formik initialValues={userForm} onSubmit={userSubmit} >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* <!-- Name input --> */}
            <div className="d-flex justify-content-center align-item-center mb-4 px-3">
              <label className="mx-1" for="form4Example1">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                onChange={handleChange}
                value={values.title}
              />
            </div>

            {/* <!-- Message input --> */}
            <div className="d-flex  mb-4 px-3">
              <label className="mx-1" for="form4Example3">
                Description
              </label>
              <TextareaAutosize
                aria-label="empty textarea"
                className="form-control"
                id="description"
                minRows={5}
                onChange={handleChange}
                value={values.description}
                
              />
            </div>
            <div className=" mb-4 d-flex justify-content-evenly align-item-center ">
              <Button variant="contained" component="label">
                <i class="fas fa-upload    "></i> &nbsp;
                Upload Video
                <input
                  hidden
                  accept="video/*"
                  multiple
                  type="file"
                  onChange={uploadFile}
                />
              </Button>
              <Button variant="contained" component="label">
                Upload Thumbnail
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </Button>
            </div>
            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-center mb-4">
              {!loading ? (
                <button type="submit" className="btn btn-danger w-75 mb-4 mt-3 rounded-5">
              Submit
            </button>):(
              <Loading></Loading>)
            }
            </div>
          </form>
        )}
      </Formik>
      </div>
      </div>
  );
};

export default AddVideo;
