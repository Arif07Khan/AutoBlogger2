import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import app_config from '../../config';
import "./ManagerBlog.css";

const ManagerBlog = () => {

    const url = app_config.backend_url;
   const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getDataFromBackend = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/blog/getall");
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setBlogData(data);
        setLoading(false);
      }
    };

    
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteBlog = async (id) => {
    console.log(id);
    const response = await fetch(url + "/blog/delete/" + id, {
      method: "DELETE",
    });
    if (response.status === 200) {
      toast.success("Blog Deleted");
      getDataFromBackend();
    }
  };


  const displayBlog = () => {
    if (!loading) {
    return (
      <div className="container">
        <div className="row">
          {blogData.map(({ _id, title, image, createdAt,category,description }) => (
            <div className="col-md-4 mt-4">
              <div className="card">
                <div classNmae="card-header ">
                  <img src={url+"/"+image} alt="blog" className="img-fluid admin-bg-image" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">{category}</p>
                </div>
                <button className="btn btn-primary" onClick={e=>{deleteBlog(_id)}}><i className="fa fa-thin fa-trash bg-red"></i> Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    }
  }

  return (
    <div className='container-fluid'>
      <h1 className="text-center">Manage Blog</h1>
    {displayBlog()}
    </div>
  )
}

export default ManagerBlog;