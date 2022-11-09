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
      <table className='table '>
        <thead className='outline'>
          <tr>
            <th className='h5'>Blog Title</th>
            <th className='h5'>Blog Content</th>
            <th className='h5'>Blog Date</th>
            <th className='h5'>Blog Image</th>
            <th className='h5'>Blog Category</th>
            <th className='h5'>Blog Action</th>
            </tr>
        </thead>
        <tbody>
          {blogData.map((blog) => (
            <tr key={blog._id}>
              <td className='font-weight-bold'>{blog.title}</td>
              <td>{blog.description}</td>
              <td>{blog.createdAt}</td>
              <td>{blog.image}</td>
              <td>{blog.category}</td>
              <td>
                <button className='btn btn-danger' onClick={() => deleteBlog(blog._id)}><i className="fa fa-trash" aria-hidden="true"></i>  Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    );
    }
  }

  return (
    <div className='container-fluid bg-admin-blogs '>
      <h1 className="text-center mb-3">Manage Blog</h1>
    {displayBlog()}
    </div>
  )
}

export default ManagerBlog;