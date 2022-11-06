import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const ViewVideos = () => {

  const url=app_config.backend_url;
  const {id}=useParams();
  const [videoList, setVideoList] = useState([])

  console.log(id);

    const getDataFromBackend = async()=>{
      const response=await fetch(url+"/video/getbyid/"+id);
      console.log(response.status);
      const data=await response.json();
      console.log(data);
      setVideoList(data);
    }

    useEffect(() => {
      getDataFromBackend();
    }, [])
    

    const displayVideo=()=>{
      return(
        <div>
          <h1>View Video</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{videoList.title}</h5>
                  <p className="card-text">{videoList.description}</p>
                  <video src={url+"/"+videoList.file} className="btn btn-primary" controls muted>Watch Video</video>
                  </div>
                  </div>
                  </div>
                  </div>
        </div>
      )
    }

  return (
    <div>
      {displayVideo()}
    </div>
  )
}

export default ViewVideos;