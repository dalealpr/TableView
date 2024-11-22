import React from "react";
// Context
import { useSidebar } from "../core/context/SidebarContext";
// Icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Hamburger from "hamburger-react";

const Header = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const notificationCount = 2;

  return (
    <div className={isOpen ? "flex p-6 justify-end items-center gap-5 shadow-md" : "flex p-6 justify-between items-center gap-5 shadow-md"}>
      <div className={isOpen ? "hidden" : "block"}>
        <Hamburger
          size={26}
          color="#1f1f1f"
          toggled={isOpen}
          toggle={setIsOpen} 
        />
      </div>
      <div className="flex gap-8 pr-5">
        <div className="flex pr-10 cursor-pointer">
          <NotificationsIcon sx={{ color: "grey", fontSize: "2rem" }} />
          <span className="relative -top-1 -left-3 bg-sky-700 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {notificationCount}
          </span>
        </div>
        <div className="flex flex-col justify-end cursor-pointer">
          <span className="text-end">Usuario Cliente</span>
          <span className="text-gray-500 text-sm text-end">Administrador</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300">
          <PersonIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
