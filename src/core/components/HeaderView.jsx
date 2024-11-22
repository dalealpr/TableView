import React from "react";
import { NavLink } from "react-router-dom";

const HeaderView = ({ menuLink }) => {
  console.log(menuLink);
  return (
    <div className="flex pb-3 gap-1">
      <NavLink className="font-bold text-lg" to="/dashboard">
        Home
      </NavLink>
      <span className="font-bold text-lg">{" > "}</span>
      <NavLink className="font-bold text-lg" to={menuLink.to}>
        {menuLink.label}
      </NavLink>
    </div>
  );
};

export default HeaderView;
