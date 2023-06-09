import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Inquiry from '../pages/Inquiry'
import Main from '../pages/Main'
import DetailPage from '../pages/DetailPage'
import AddProduct from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'
import Purchase from '../pages/Purchase'
import MyAddress from './MyAddress'

export default function Myroutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Main/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    <Route path='inquiry' element={<Inquiry/>}></Route>
    <Route path='/purchase/:id' element={<Purchase/>}></Route>
    <Route path='/detail/:id' element={<DetailPage/>}></Route>
    <Route path='/addproduct' element={<AddProduct/>}></Route>
    <Route path='/edit/:id' element={<EditProduct/>}></Route>
    <Route path='/address' element={<MyAddress/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
