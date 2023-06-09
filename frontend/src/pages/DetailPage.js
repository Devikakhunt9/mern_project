import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailPage() {
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
        <div class="row">
          <div class="col-lg-5 col-sm-2">
            <div class="card">
              <img src={"../" + data.Image} alt={data.Name} width={200} />
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-6">
                      <button
                        class="btn btn-primary"
                        onClick={() => {
                          navigate("/edit/" + data.ID);
                        }}
                      >
                        {" "}
                        Edit Product
                      </button>
                    </div>
                    <div class="col-6">
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          fetch(api + "/" + param.id, {
                            method: "DELETE",
                          }).then((res) => navigate("../"));
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fw-bolder fs-1 text-decoration-underline">
            Details:
          </div>
          <div class="col-lg-5 col-sm-2">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>:</td>
                  <td>{data.Name}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>:</td>
                  <td>{data.Category}</td>
                </tr>
                <tr>
                  <th scope="row">CuttingType</th>
                  <td>:</td>
                  <td>{data.CuttingType}</td>
                </tr>
                <tr>
                  <th scope="row">Capacity</th>
                  <td>:</td>
                  <td>{data.Capacity}</td>
                </tr>
                <tr>
                  <th scope="row">OPMode</th>
                  <td>:</td>
                  <td>{data.OPMode}</td>
                </tr>
                <tr>
                  <th scope="row">EleConnection</th>
                  <td>:</td>
                  <td>{data.EleConnection}</td>
                </tr>
                <tr>
                  <th scope="row">Color</th>
                  <td>:</td>
                  <td>{data.BodyFinish}</td>
                </tr>
                <tr>
                  <th scope="row">MotorPower</th>
                  <td>:</td>
                  <td>{data.MotorPower}</td>
                </tr>
                <tr>
                  <th scope="row">CuttingMethod</th>
                  <td>:</td>
                  <td>{data.CuttingMethod}</td>
                </tr>
                <tr>
                  <th scope="row">Dimension</th>
                  <td>:</td>
                  <td>{data.Dimension}</td>
                </tr>
                <tr>
                  <th scope="row">BladeSize</th>
                  <td>:</td>
                  <td>{data.BladeSize}</td>
                </tr>
                <tr>
                  <th scope="row">MaxCuttingLength</th>
                  <td>:</td>
                  <td>{data.MaxCuttingLength}</td>
                </tr>
                <tr>
                  <th scope="row">MaxCuttingThickness</th>
                  <td>:</td>
                  <td>{data.MaxCuttingThickness}</td>
                </tr>
                <tr>
                  <th scope="row">Material</th>
                  <td>:</td>
                  <td>{data.Material}</td>
                </tr>
                <tr>
                  <th scope="row">Prize</th>
                  <td>:</td>
                  <td>{data.Prize}/-</td>
                </tr>
                <tr>
                  <th scope="row">Video</th>
                  <td>:</td>
                  <td>
                    <a href={data.Video}>Go</a>
                  </td>
                </tr>
                <tr>
                 <td  colSpan={3}>
                        <div class='row'>
<div class='col-5 btn btn-success m-1' onClick={()=>{
  navigate('/purchase/'+data.ID)
}}>
Buy
</div>
<div class='col-5 btn btn-success m-1' onClick={()=>{
  navigate('/')
}}>
Request Inquiry 
</div>
                        </div>
                 </td>
                  </tr>              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
