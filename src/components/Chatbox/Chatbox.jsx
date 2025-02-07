import React, { useContext } from "react";
import { IoReceipt } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { FaPaperPlane } from "react-icons/fa";
import Blind from "../../assets/icons/Blind-Baboon.webp";
import MonkeyContext from "../../context/MonkeyContext.jsx";

const Chatbox = () => {
  const { toggleChatBox, setToggleChatBox } = useContext(MonkeyContext);
  return (
    <div
      className={` bg-zinc-950 z-40 border-l-2 border-[#4a556557]  ${
        toggleChatBox
          ? "fixed 2xl:sticky right-0 top-[83px] translate-x-0 w-[300px]"
          : "fixed right-0 top-[83px] translate-x-[100%] w-0"
      }  transition-all ease-in-out duration-300 `}
      style={{ height: "calc(100vh - 83px)" }}
    >
      <div className="relative flex flex-col justify-between h-full">
        <div className="absolute -top-20 right-20 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
        <div className="flex items-center justify-between gap-2 text-white border-b-2 border-[#4a556557] px-5 py-3 sticky top-0 left-0">
          <h1 className="font-semibold">Live Chat</h1>
          <div className="flex items-center gap-3">
            <button className="p-2 font-semibold bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-full text-[14px] ">
              <IoReceipt />
            </button>
            <button
              onClick={() => {
                setToggleChatBox(false);
              }}
              className="p-2 font-semibold bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-full text-[14px] "
            >
              <LiaTimesSolid />
            </button>
          </div>
        </div>
        <div className="text-white flex-1 space-y-2 p-3 overflow-auto">
          <div className="p-2 flex w-full gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">ok</p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">ok</p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
          <div className="p-2 flex gap-1 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] ">
            <div className="min-w-[20px] max-w-[20px]">
              <img src={Blind} alt="profile" className="w-full" />
            </div>
            <span className="leading-1 flex-1">
              <h1 className="font-semibold text-xs text-gray-400 inline">
                burner23:{" "}
              </h1>
              <p className="text-gray-400 text-xs inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repudiandae asperiores labore rem iusto excepturi ea sit
                possimus debitis sunt!
              </p>
            </span>
            <div className="text-[9px] text-gray-400 justify-end">06:42</div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 text-white border-b-2 border-[#4a556557] px-3 py-3 sticky bottom-0 left-0">
          <div className="p-2.5 text-[14px] border border-[#4a556557] rounded-xl w-full flex items-center customShadow justify-between">
            <span className="text-gray-400">Login to chat</span>
          </div>

          <button className="p-3 font-semibold bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border-2 border-[#4a556557] hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-xl text-[14px] ">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
