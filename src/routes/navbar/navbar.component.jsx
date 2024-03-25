import { Outlet } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div>Navbar</div>
      <Outlet />
    </React.Fragment>
  );
}

export default Navbar