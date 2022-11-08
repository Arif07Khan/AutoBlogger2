import React, { useEffect, useState } from "react";
import Loading from "../main/Loading";
import { format } from "date-fns";
import app_config from "../../config";



const ListBlog = () => {

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
          {blogdata.map(({ _id, title, image, createdAt }) => (
            <div className="col-md-4 mt-4">
              <div className="card">
                <div classNmae="card-header">
                  <img src={url+"/"+image} alt="blog" className="img-fluid" />
                </div>
                <div className="card-body">
                  <p className="card-text">
                  {format(new Date(createdAt), "dd/MM/yyyy")}
                  </p>
                  <h5 className="card-title">{title}</h5>
                </div>
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

  return <div>{displayBlog()}</div>;
};

export default ListBlog;
