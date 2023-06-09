import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const navigate = useNavigate();
      const [mch, setMcn] = useState([]);
      useEffect(() => {
    fetch("http://localhost:1111/machine")
      .then((res) => res.json())
      .then((res) => {
        setMcn(res);
      });
  }, []);
  const formatedMch = mch.map((m) => {
    return (<>
      <div class='col-lg-3 col-sm-2 mx-auto'>
      <div class="card">
  <img src={m.Image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{m.Name}</h5>
    <p class="card-text">Rs.<b>{m.Prize}/-</b></p>
    <div class='row'>
      <div class='col-6'>

    <button href="#" class="btn deatilBtn" onClick={()=>{
      // navigate('/'+m.ID);
      navigate('/detail/'+m.ID);
    }}>Details</button>
      </div>
      <div class='col-6'>

    <button href="#" class="btn deatilBtn2" onClick={()=>{
      navigate('/purchase/'+m.ID);
    }}>Purchase</button>
      </div>
    </div>
    
  </div>
</div>
      </div>
    </>);
  });
  return (
    <>
    <div class='container' style={{marginBottom:10}}>
      <div class='row p2 m3' >

      {formatedMch}
      </div>
    </div>
    </>
  );
}
