import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Chatbox from "../Chatbox/Chatbox";
import Home from "../../pages/Home/Home";

const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Home />
      <Chatbox />
    </div>
  );
};

export default Layout;
