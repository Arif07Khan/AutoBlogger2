import React, { useEffect, useState } from "react";
import Loading from "../main/Loading";
import { format } from "date-fns";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import "./listblog.css";




const ListBlog = () => {
  const navigate = useNavigate();
  const url = app_config.backend_url;
  const [blogdata, setBlogdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/blog/getall");
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setBlogdata(data);
      setLoading(false);
    }
  };

  


  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayBlog = () => {
    if (!loading) {
    return (
      <div className="container">
        <div className="row">
          {blogdata.map(({ _id, title, image, createdAt,description }) => (
            <div className="col-md-4 mt-4">
              <div className="card">
                <div classNmae="card-header ">
                  <img src={url+"/"+image} alt="blog" className="img-fluid" style={{height:"270px",padding:"0 55px"}}/>
                </div>
                <div className="card-body">
                  <p className="card-text text-end">
                  {format(new Date(createdAt), "dd/MM/yyyy")}
                  </p>
                  <h5 className="card-title">{title}</h5>
                  <p>{description}</p>
                </div>
                <button className="btn btn-primary" onClick={e=>navigate('/blog/viewblog/'+_id)}><i className="fa fa-eye" ></i>&nbsp; &nbsp; View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center  mt-3 ">
        <Loading className="text-lg" />
      </div>
    );
  };
  };

  return <div classname="container-fluid">
    <div className="list-bg-image mb-5">
      <p>Blogs Container.</p>
    </div>
    {displayBlog()}
    </div>
};

export default ListBlog;
