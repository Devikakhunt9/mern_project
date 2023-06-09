import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Navbar from "../model/Navbar";
export default function Layout() {
  return (
    <>
      <Header />
      <Navbar/>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/inquiry">Inquiry</Link> */}
      <Outlet />
      <Footer />
    </>
  );
}
