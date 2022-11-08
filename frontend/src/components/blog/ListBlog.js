import React, { useEffect } from 'react'

const ListBlog = () => {

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/blog/getall");
    if(response.status===200){
      const data=await response.json();
      console.log(data);
    }
  }

  useEffect(() => {
    getDataFromBackend();
  }, [])



  return (
    <div>
      <h1>ListBlog</h1>
    </div>
  )
}

export default ListBlog