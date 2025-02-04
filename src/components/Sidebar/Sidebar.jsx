import React, { useState } from "react";
import "./Sidebar.css";
import Gift from "../../assets/icons/gift.webp";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGift,
  FaHandshake,
} from "react-icons/fa6";
import { FaHome, FaSearch, FaShoppingBag } from "react-icons/fa";
import { MdCasino, MdOutlineSportsSoccer } from "react-icons/md";
import { GiTargetShot } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";

const Sidebar = () => {
  const links = [
    {
      name: "Home",
      icon: <FaHome />,
      linkto: "home",
    },
    {
      name: "Casino",
      icon: <MdCasino />,
      linkto: "casino",
    },
    {
      name: "Sports",
      icon: <MdOutlineSportsSoccer />,
      linkto: "sports",
    },
    {
      name: "$1 Million Race",
      icon: <FaGift />,
      linkto: "$1MillionRace",
    },
    {
      name: "Challanges",
      icon: <GiTargetShot />,
      linkto: "challanges",
    },
    {
      name: "VIP Experience",
      icon: <IoDiamond />,
      linkto: "vipexperience",
    },
    {
      name: "Shop",
      icon: <FaShoppingBag />,
      linkto: "shop",
    },
    {
      name: "Affiliates",
      icon: <FaHandshake />,
      linkto: "affiliates",
    },
  ];

  const [sideBar, setSideBar] = useState(true);
  return (
    <div className="sticky top-[83px]" style={{ height: "calc(100vh - 83px)" }}>
      <div
        className={`${
          sideBar ? "w-[250px] gap-5" : "w-[70px] gap-7"
        } bg-[#0d0c0e] relative  text-white py-10 px-3 h-full flex flex-col items-center border-r-2 border-[#4a556557] transition-all duration-300 ease-in-out`}
        
      >
        <div className="absolute top-0 w-[50px] h-[50px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[50px] h-[50px] bg-yellow-300 rounded-full shadow-[0px_0px_50px_rbga(255,255,255,1)] blur-3xl"></div>
        {sideBar ? (
          <div className="flex w-full items-center gap-2 p-2 px-4 rounded-lg bg-gradient-to-r from-[#e4bd00ad] to-[rgba(0,0,0,0.25)] relative">
            <FaGift /> Promotions
            <div className="absolute right-0">
              <img src={Gift} alt="" />
            </div>
          </div>
        ) : (
          <FaGift />
        )}
        {sideBar ? (
          <div className="p-2.5 px-4 text-[14px] border border-[#4a556557] rounded-full w-full flex items-center customShadow justify-between">
            <span className="text-gray-400">Search games</span>
            <FaSearch className="text-xl" />
          </div>
        ) : (
          <FaSearch className="text-xl" />
        )}
        <div className="flex flex-col gap-2 w-full">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-[#6b6c6d23] rounded-md cursor-pointer"
            >
              <span className="bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] p-2 rounded-md">
                {item.icon}
              </span>
              {sideBar && <h3 className="text-[14px]">{item.name}</h3>}
            </div>
          ))}
        </div>
        <div
          className="absolute -right-4.5 top-3 p-2 rounded-full border border-[#4a556557] z-50 bg-[#18181b] cursor-pointer"
          onClick={() => setSideBar(!sideBar)}
        >
          <FaChevronLeft className="text-[14px]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
