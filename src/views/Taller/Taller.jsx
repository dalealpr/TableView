import React from "react";
// Data
import menu from "../../data/menu";
// Components
import HeaderView from "../../core/components/HeaderView";
import Table from "../../core/components/Table";

const Taller = () => {
  return (
    <div className=" w-full h-full  text-gray-600">
      <HeaderView menuLink={menu[3]} />
      <div className="flex justify-between">
        <h2 className="text-[26px] font-semibold">{menu[3].title}</h2>
        <button className="mr-10 text-sm rounded-md text-sky-700 border-[1px] px-5 border-sky-700">
          {menu[3].button}
        </button>
      </div>
      <Table />
    </div>
  );
};

export default Taller;
