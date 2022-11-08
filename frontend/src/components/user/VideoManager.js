
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import Loading from "../main/Loading";
import AddVideo from "./AddVideo";
import "./VideoManager.css";
// import Bounce from 'react-reveal/Bounce';

const VideoManager = () => {

  const url = app_config.backend_url;
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
 

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/video/getbyuserid/"+currentUser._id);
    console.log(response.status);
    if (response.status === 200) {
    const data = await response.json();
    setUserArray(data);
    console.log(data);
    setLoading(false);
    }
  };


  useEffect(() => {
    getDataFromBackend();
  }, []);

  const convertVideotoBlog= async(id)=>{
    console.log(id);
    setBlogLoading(true);
    const response = await fetch(url + "/util/transcribe/"+id);
    if(response.status===200){
      Swal.fire({
        title: "Success",
        text: "Video converted to blog",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      const data = await response.json();
      console.log(data);
      getDataFromBackend();
      navigate('/blog/addblog/'+id);
      setBlogLoading(false);
    }
    else if(response.status===400){
      toast.error("Video is not transcribed yet");
      setBlogLoading(false);
    }
    else if(response.status===500){
      toast.error("Internal server error");
      setBlogLoading(false);
    }
  }

  const deleteVideo = async (id) => {
    console.log(id);
    const response = await fetch(url + "/video/deletebyid/" +id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Video Deleted Successfully");
      getDataFromBackend();
    }

  };

  const displayVideo = () => {
    if (!loading) {
      return userArray.map(({ _id, title, description, file, thumbnail }) => (
          <div className="col-md-4 mt-4" key={_id}>
          <div className="card">
            <div
              className="bg-div hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={url + "/" + thumbnail}
                className="img-fluid bg-image"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to={"/user/viewvideo/" + _id}>
                <button className="btn btn-primary">View</button>
              </Link>
            &nbsp;&nbsp;&nbsp;
              <button className="btn btn-danger" onClick={(e)=>deleteVideo(_id)}>
              Delete
            </button>     
            &nbsp;&nbsp;&nbsp;
            {!blogLoading?(
            <button className="btn btn-success" onClick={(e)=>convertVideotoBlog(_id)}>
              Convert to Blog
            </button>):(
            <button className="btn btn-success" disabled >
            Converting...
            </button>)
          }
            </div>
          </div>
        </div>
        ));
    } else {
      return <div className="text-center">
      <Loading></Loading>
        </div>
    }
  };



  return (
    <div>
      <section>
        <div className="d-flex justify-content-center align-items-center  videoheader ">
        <h1 className="text-light">
          Add video and convert it to blog
      </h1>
        </div>
      </section>
      <section>
          <AddVideo getDataFromBackend={getDataFromBackend}/>
        <div>
          <h3 className="text-center mt-4">Latest videos</h3>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-3 mb-5">{displayVideo()}</div>
        </div>
      </section>
    </div>
  );
};

export default VideoManager;