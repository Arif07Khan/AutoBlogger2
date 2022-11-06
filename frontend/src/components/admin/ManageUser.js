import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading';

const ManageUser = () => {

  const [usersData, setUsersData] = useState("");

  const getDatafromBackend = async () => {
   const response = await fetch("http://localhost:5000/user/getall");
   if (response.status === 200) {
     const data = await response.json();
     console.log(data); 
      setUsersData(data);
   } else { 
     console.log("Something went wrong");
   } 
  }
 useEffect(() => {
    getDatafromBackend();
 }, [])

 const deleteUser = async (id) => {
    const response = await fetch("http://localhost:5000/user/delete/"+id, {
      method: "DELETE",
    });
    if (response.status === 200) {
      console.log("Success");
      getDatafromBackend();
    } else {
      console.log("Something went wrong");
    }
  }


 const displaydata = () => {

    return <div>
    <h1 className="text-center">Manage User</h1>
    <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Avatar</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {usersData && usersData.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td><img src={user.avatar} alt="avatar" style={{width:"50px",height:"50px"}}/></td>
          <td>
            <button className="btn btn-danger" onClick={e=>deleteUser(user._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
 
  }
 
  return (
    <div>
      {usersData ? displaydata() : <div className='text-center mt-5'><Loading/></div>}
    </div>
  )
}

export default ManageUser;