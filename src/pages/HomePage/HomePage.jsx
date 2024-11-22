import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../core/context/SidebarContext";

const HomePage = () => {
  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex">
        <Sidebar />

        <div className="h-full w-full  flex flex-col">
          <Header />
          <div className="flex-1 p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default HomePage;
