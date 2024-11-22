import React from "react";
import { NavLink } from "react-router-dom"; 
// Data
import menu from "../data/menu.js";
// Context
import { useSidebar } from "../core/context/SidebarContext.jsx";
// Iconos
import Hamburger from "hamburger-react";

const Sidebar = () => {
  // Context
   const { isOpen, setIsOpen } = useSidebar();

  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div
        className={`relative h-full w-64 bg-sky-700 p-5 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 z-60 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex gap-4 items-center">
            <Hamburger
              size={20}
              color="#ffffff"
              toggled={isOpen}
              toggle={setIsOpen}
            />
            <h2 className="text-white text-2xl font-bold">Navegación</h2>
          </div>
          <nav>
            <ul className="space-y-5 mt-20 pl-4">
              {menu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-lg cursor-pointer transition ${
                        isActive
                          ? "text-sky-300"
                          : "text-white hover:text-sky-300"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mb-4">
          <a
            to="/logout"
            className="text-white text-lg hover:text-sky-300 transition cursor-pointer pl-4"
          >
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
