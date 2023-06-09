import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inquiry() {
  const navigate = useNavigate();
  return (
    <div class='container'>
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Mobile no.</label>
    <input type="email" class="form-control" id="exampleInputEmail1"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Details Of Your  Product Requirement</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary mb-3" onClick={()=>{navigate('/')}}>Submit</button>
</form>
    </div>
  )
}
