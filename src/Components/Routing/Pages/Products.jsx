import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex gap-10 justify-center m-10">
      <div>
        <Link to="men">Men</Link>
      </div>
      <div>
        <Link to="women">Women</Link>
      </div>
         <Outlet />
    </div>
  );
};

export default Products;
