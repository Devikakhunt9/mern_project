import React from "react";
import { useNavigate } from "react-router-dom";
import MyAddress from "./MyAddress";

export default function HeaderTop() {
  const navigate = useNavigate();
  return (
    <div class="container-fluid text-center align-center">
      <div class="row ">
        <div class="col-lg-2">
          <div class="row justify">
            <img class="logo" src="assets/images/Noble Logo1.png" alt="logo" />
          </div>
          <a href="https://www.google.com/maps/dir/22.2623571,70.7636202/NOBEL+ENGINEERING,+Neelkanth+Industrial,+Nr+Maldhari+Railway+Crossing,+opp.+Gopal+Hotel,+Rajkot,+Gujarat+360002/@22.2650327,70.7677163,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3959cb4548973b53:0x112264b9e9a6a221!2m2!1d70.8068317!2d22.2697122?entry=ttu" class='myAdd'>

        
          <div
            class="row d-flex justify-content-center address"
          >
            Nilkanth Industrial Area,
            <br />
            Rajkot,Gujarat
          </div>
          </a>
        </div>
        <div class="col-lg-7 title">Nobel Engineering</div>
        <div class="col-lg-3 buttons">
          <div class="col myBtn">Call or Inquiry</div>
          <div class="col myBtn">Get a Quote</div>
        </div>
      </div>
    </div>
  );
}
// import React from 'react'

// export default function HeaderTop() {
//   return (
//     <div>
//       This is HEader top
//     </div>
//   )
// }
