import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';

export default function Purchase() {
    const api = "http://localhost:1111/machine";
    const navigate = useNavigate();
    const param = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(api + "/" + param.id, { method: "GET" })
        .then((res) => res.json())
        .then((res) => setData(res));
    }, [param.id]);
  
    console.log(data);
    return (
      <>
        <div class="container">
        <div class="card mb-3" style={{maxWidth:"540px;"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={'../'+data.Image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Mobile no.</label>
    <input type="email" class="form-control" id="exampleInputEmail1"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your Name:</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address:</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button  class="btn btn-success mb-3" onClick={()=>{
    navigate('/')
  }}>Buy</button>
</form>
      </div>
    </div>
  </div>
</div>
        </div>
      </>
    );
}
