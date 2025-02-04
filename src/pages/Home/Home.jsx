import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderLogo from "../../assets/icons/headerlogo.webp";
import Coin from "../../assets/videos/MonkeyTiltCoinAlpha.webm";
import Casino from "../../assets/images/home/casino-card.webp";
import Sports from "../../assets/images/home/sports-card.webp";
import Poker from "../../assets/images/home/poker-card.webp";
import Crypto from "../../assets/images/home/homepage-crypto.webp";
import TiltClub from "../../assets/images/home/homepage-tilt-club.webp";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex relative ">
      <Sidebar />
      <div className="absolute -top-20 right-0 w-[150px] h-[150px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
      <div className="absolute -top-20 right-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
      <div className="absolute -top-20 right-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
      <div className="bg-[#0d0d0f] min-h-screen w-full px-4 @container">
        <div className="w-[1300px] max-w-full mx-auto py-10">
          <div className="flex items-center justify-between gap-3 ">
            <h1 className="uppercase md:text-[40px] lg:text-[64px] font-bold bg-gradient-to-r from-[#fdc70000]  to-gray-600  text-transparent bg-clip-text drop-shadow-md [text-shadow:_0_4px_4px_rgb(254_222_36_/_0.8)] ">
              <span className="text-stroke-3">Welcome to </span>
              <span className="text-[#ffe020db] text-stroke-3">
                monkey tilt
              </span>
            </h1>
            <img src={HeaderLogo} alt="header" className="w-[110px]" />
          </div>
          <div className="grid @max-[1200px]:grid-cols-6 grid-cols-8 gap-5 my-10">
            <div className="rounded-4xl row-span-17 col-span-2 relative flex flex-col bg-[#101820] hover:bg-[#202a33] overflow-hidden border-2 border-[#396d9885] hover:border-[#396d98] p-5 group transition-all duration-300 ease-in-out">
              <div className="absolute -bottom-2 left-2 w-[150px] h-[150px] bg-blue-400 rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl "></div>
              <h1 className="text-4xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
                CASINO
              </h1>
              <div className="flex items-center justify-center mt-auto z-10 group-hover:scale-105 transition duration-300 group-hover:-translate-y-1 ">
                <img src={Casino} alt="" className="w-[80%] " />
              </div>
            </div>
            <div className="bg-[#191411] hover:bg-[#29201b] rounded-4xl row-span-17 col-span-2 relative overflow-hidden border-2 border-[#7d593181] hover:border-[#7d5931] flex flex-col p-5 group transition-all duration-300 ease-in-out">
              <div className="absolute -bottom-2 left-2 w-[150px] h-[150px] bg-[#e4a018] rounded-full shadow-[0px_0px_50px_#53411c] blur-3xl"></div>
              <h1 className="text-4xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
                SPORTS
              </h1>
              <div className="flex items-center justify-center mt-auto z-10 group-hover:scale-105 transition duration-300 group-hover:-translate-y-1">
                <img src={Sports} alt="" className="w-[80%] " />
              </div>
            </div>
            <div className="bg-[#0d1815] hover:bg-[#14241f] rounded-4xl row-span-17 col-span-2 relative overflow-hidden border-2 border-[#25775680] hover:border-[#257756] p-5 group transition-all duration-300 ease-in-out flex flex-col">
              <div className="absolute -bottom-2 left-2 w-[150px] h-[150px] bg-[#17c591] rounded-full shadow-[0px_0px_50px_#53411c] blur-3xl"></div>
              <h1 className="text-4xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
                POKER
              </h1>
              <div className="flex items-center justify-center mt-auto z-10 group-hover:scale-105 transition duration-300 group-hover:-translate-y-1">
                <img src={Poker} alt="" className="w-[80%] " />
              </div>
            </div>

            <div className=" rounded-4xl row-span-26 col-span-2 @max-[1200px]:hidden flex flex-col py-5 px-5 items-center justify-center overflow-hidden border-2 border-[#5e56187e] hover:border-[#5e5618] bg-multiple-images bg-[#15130d] relative transition duration-300 ease-in-out group hover:brightness-105">
              <div className="w-full self-center flex items-center justify-center mt-auto">
                <video
                  src={Coin}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[250px]"
                ></video>
              </div>
              <button className="mt-auto w-full p-2 px-6 font-semibold bg-gradient-to-r from-[#f59e0b] from-[2.36%] via-[#ffe500] via-[68.59%] to-[#f59e0b] border-2 border-[#ffe500] to-[96.98%] text-black shadow hover:shadow-[0px_0px_20px_#f59e0b] transition ease-in-out duration-300 rounded-xl text-[14px] ">
                Get Started
              </button>
              <div className="absolute -top-2 left-2 w-[70px] h-[70px] bg-[#fcda1a] group-hover:bg-[#fad504]  rounded-full  blur-3xl -z-1"></div>
              <div className="absolute -top-2 right-2 w-[150px] h-[150px] bg-[#e05f0f] group-hover:bg-[#f55f02]  rounded-full  blur-3xl -z-1"></div>
            </div>
            <div className="bg-[#1a1018] hover:bg-[#22141f] row-span-9 rounded-4xl col-span-3 overflow-hidden relative border-2 border-[#4f254294] hover:border-[#4f2542] px-5 group flex items-center justify-between transition ease-in-out duration-300">
              <div className="absolute -bottom-5 right-2 w-[150px] h-[150px] bg-[#d425ac] rounded-full shadow-[0px_0px_50px_#53411c] blur-3xl"></div>
              <div>
                <h1 className="text-4xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
                  TRADING
                </h1>
                <h3 className="font-semibold text-gray-400 text-xl">
                  COMING SOON
                </h3>
              </div>
              <div className=" z-10 group-hover:scale-105 transition duration-300 group-hover:-translate-y-1 flex items-center justify-end">
                <img src={Crypto} alt="" className="w-[55%] " />
              </div>
            </div>
            <div className="bg-[#16141f] hover:bg-[#1b1827] row-span-9 rounded-4xl col-span-3 overflow-hidden relative border-2 border-[#43386180] hover:border-[#433861] flex items-center justify-between group transition ease-in-out duration-300 px-5">
              <div className="absolute -bottom-5 right-2 w-[150px] h-[150px] bg-[#7645f3] rounded-full shadow-[0px_0px_50px_#53411c] blur-3xl"></div>
              <div>
                <h1 className="text-4xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
                  TILT CLUB
                </h1>
                <h3 className="font-semibold text-gray-400 text-xl">
                  COMING SOON
                </h3>
              </div>
              <div className=" z-10 group-hover:scale-105 transition duration-300 group-hover:-translate-y-1 flex items-center justify-end">
                <img src={TiltClub} alt="" className="w-[55%] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
