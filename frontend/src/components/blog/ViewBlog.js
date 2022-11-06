import React from 'react'

const ViewBlog = () => {
  const { id } = useParams();
  console.log(id);

  const getDatafromBackend=()=>{
    
  }

  return (
    <div>ViewBlog</div>
  )
}

export default ViewBlog