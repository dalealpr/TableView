import React from "react";
// Data
import menu from "../../data/menu.js";
// Components
import HeaderView from "../../core/components/HeaderView.jsx";

const Ordenes = () => {
  return (
    <div className="w-full h-full  text-gray-600">
      <HeaderView menuLink={menu[2]} />
      <h2 className="text-[27px] font-semibold">{menu[2].title}</h2>
    </div>
  );
};

export default Ordenes;
