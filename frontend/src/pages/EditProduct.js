import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const params = useParams();
  const api = "http://localhost:1111/machine";

  useEffect(() => {
    fetch(api + "/" + params.id)
      .then((res) => res.json())
      .then((res) => setData(res));
  },[]);
  return (
    <>
      <div class="container">
        <div class="col-lg-5 col-sm-2">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Name}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Name: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Category</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Category}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Category: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">CuttingType</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.CuttingType}
                    onChange={(e) => {
                      setData({
                        ...data,
                        CuttingType: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Capacity</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Capacity}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Capacity: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">OPMode</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.OPMode}
                    onChange={(e) => {
                      setData({
                        ...data,
                        OPMode: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">EleConnection</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.EleConnection}
                    onChange={(e) => {
                      setData({
                        ...data,
                        EleConnection: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Color</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.BodyFinish}
                    onChange={(e) => {
                      setData({
                        ...data,
                        BodyFinish: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">MotorPower</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.MotorPower}
                    onChange={(e) => {
                      setData({
                        ...data,
                        MotorPower: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">CuttingMethod</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.CuttingMethod}
                    onChange={(e) => {
                      setData({
                        ...data,
                        CuttingMethod: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Dimension</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Dimension}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Dimension: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">BladeSize</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.BladeSize}
                    onChange={(e) => {
                      setData({
                        ...data,
                        BladeSize: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">MaxCuttingLength</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.MaxCuttingLength}
                    onChange={(e) => {
                      setData({
                        ...data,
                        MaxCuttingLength: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">MaxCuttingThickness</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.MaxCuttingThickness}
                    onChange={(e) => {
                      setData({
                        ...data,
                        MaxCuttingThickness: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Material</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Material}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Material: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Prize</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Prize}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Prize: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Video</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.Video}
                    onChange={(e) => {
                      setData({
                        ...data,
                        Video: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => {
                      fetch(api + "/" + params.id, {
                        method: "PUT",
                        body: JSON.stringify(data),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }).then((res) => {
                        navigate("../");
                      });
                    }}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
