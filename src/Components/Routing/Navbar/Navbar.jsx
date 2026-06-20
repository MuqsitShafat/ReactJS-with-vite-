import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-300">
        {/* Navbar Title */}
      <div className="flex justify-between py-10 px-30  items-center  ">
          <h2>Muqsit Collectives</h2>
        {/* SPA */}
        <div className="flex gap-20  ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/Courses">Courses</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
