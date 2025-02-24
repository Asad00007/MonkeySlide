import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderLogo from "../../assets/icons/headerlogo.webp";
import Coin from "../../assets/videos/MonkeyTiltCoinAlpha.webm";
import Promo from "../../assets/videos/MonkeyTiltPromo.webm";
import Casino from "../../assets/images/home/casino-card.webp";
import Sports from "../../assets/images/home/sports-card.webp";
import Poker from "../../assets/images/home/poker-card.webp";
import Crypto from "../../assets/images/home/homepage-crypto.webp";
import TiltClub from "../../assets/images/home/homepage-tilt-club.webp";
import Love from "../../assets/images/home/love-banner.webp";
import { MdCelebration } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import Blind from "../../assets/icons/Blind-Baboon.webp";
import { GiBananaPeeled } from "react-icons/gi";
import { live, originals, sport } from "../../../data";
import Original3 from "../../assets/images/home/originals3.webp";
import Insta from "../../assets/icons/insta.webp";
import Yt from "../../assets/icons/yt.webp";
import Tiktok from "../../assets/icons/tiktok.webp";
import Twitter from "../../assets/icons/twitter.webp";
import Smiley from "../../assets/icons/smiley.webp";
import "swiper/css";
import "swiper/css/bundle";
import "./Home.css";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [bets, setBets] = useState(10);
  const [togglebets, setTogglebets] = useState(false);
  return (
    <div className="relative flex-1 ml-[70px] 2xl:ml-0">
      <div className="absolute -top-20 right-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
      <div className="absolute -top-20 right-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
      <div className="bg-[#0d0d0f] min-h-screen w-full px-4 relative @container">
        <div className="absolute -top-20 left-0 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
        <div className="absolute -top-20 left-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
        <div className="absolute -top-20 right-0 w-[150px] h-[150px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
        <div className="w-[1150px] max-w-full mx-auto py-10">
          <div className="flex items-center justify-between gap-3 ">
            <h1 className="uppercase md:text-[40px] lg:text-[64px] font-bold bg-gradient-to-r from-[#fdc70000]  to-gray-600  text-transparent bg-clip-text drop-shadow-md [text-shadow:_0_4px_4px_rgb(254_222_36_/_0.8)] ">
              <span className="gradient-text">Welcome to </span>
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
              <div className="absolute -bottom-5 right-2 w-[150px] h-[150px] bg-[#9064ff] rounded-full shadow-[0px_0px_50px_#53411c] blur-3xl"></div>
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
          <div
            className={`border border-[#d6d3d34d] rounded-[30px] relative my-7 inline-block group overflow-hidden `}
          >
            <img
              src={Love}
              alt="Bet"
              className="group-hover:scale-[1.02] transition ease-in-out duration-300"
            />
            <div className="absolute flex items-center justify-center top-0 left-0 inset-0 flex-col text-center leading-16 group-hover:scale-[1.02] transition ease-in-out duration-300">
              <h2
                className="text-[60px]  imperial-script-regular text-amber-50"
                style={{ textShadow: "2px 2px 0px brown" }}
              >
                Senor's Risk it All for Love
              </h2>
              <h1
                className="text-[75px] font-bold lilita-one-regular text-pink-50"
                style={{ textShadow: "6px 6px 0px brown" }}
              >
                $1 MILLION RACE
              </h1>
              <p className="text-xl text-white font-semibold mt-6">
                Top Prize $500,000. Race ends on Valentine's Day (14th Feb)
              </p>
            </div>
          </div>
          <div className="my-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2 text-white items-center">
                <GiBananaPeeled className="text-2xl" />
                <h1 className="uppercase text-xl font-semibold">
                  Monkey slide originals
                </h1>
              </div>
              <button className="py-1 px-3 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-full text-white text-[12px] ">
                View All
              </button>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper my-7 "
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1450: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {originals.map((item, index) => {
                return (
                  <SwiperSlide key={index} className=" py-3 cursor-pointer">
                    <img
                      src={item}
                      alt="image"
                      width={162}
                      className="aspect-3/4 object-cover max-w-[162px] min-w-[162px] rounded-2xl hover:-translate-y-3 transition-all ease-in-out duration-300"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="my-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2 text-white items-center">
                <GiBananaPeeled className="text-2xl" />
                <h1 className="uppercase text-xl font-semibold">Live dealer</h1>
              </div>
              <button className="py-1 px-3 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-full text-white text-[12px] ">
                View All
              </button>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper my-5 "
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1450: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {live.map((item, index) => {
                return (
                  <SwiperSlide key={index} className=" py-3 cursor-pointer">
                    <img
                      src={item}
                      alt="image"
                      width={162}
                      className="aspect-3/4 object-cover max-w-[162px] min-w-[162px] rounded-2xl hover:-translate-y-3 transition-all ease-in-out duration-300"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="my-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2 text-white items-center">
                <IoMdFootball className="text-2xl" />
                <h1 className="uppercase text-xl font-semibold">Sports</h1>
              </div>
              <button className="py-1 px-3 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-full text-white text-[12px] ">
                View All
              </button>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper my-5 "
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1450: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {sport.map((item, index) => {
                return (
                  <SwiperSlide key={index} className=" py-3 ">
                    <img
                      src={item}
                      alt="image"
                      width={162}
                      className="aspect-3/4 object-cover max-w-[162px] min-w-[162px] rounded-2xl hover:-translate-y-3 transition-all ease-in-out duration-300 cursor-pointer"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="border-2 border-[#4a556557] p-5 rounded-4xl relative overflow-hidden my-10">
            <div className="absolute -top-3 left-0 w-[100px] h-[100px] bg-yellow-300 rounded-full shadow-[0px_0px_50px_rbga(255,255,255,1)] blur-3xl"></div>
            <div className="flex gap-2 text-white items-center">
              <MdCelebration className="text-2xl" />
              <h1 className="uppercase text-xl font-semibold">
                Recent casino wins
              </h1>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              allowTouchMove={false}
              grabCursor={false}
              cssMode={false}
              loopAdditionalSlides={5}
              modules={[Pagination, Autoplay]}
              className="mySwiper my-5 swiper relative"
              breakpoints={{
                450: { slidesPerView: 1, spaceBetween: 5 },
                640: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                900: { slidesPerView: 4, spaceBetween: 10 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
                1450: { slidesPerView: 7, spaceBetween: 30 },
              }}
              onMouseEnter={() =>
                document.querySelector(".swiper").swiper.autoplay.stop()
              }
              onMouseLeave={() =>
                document.querySelector(".swiper").swiper.autoplay.start()
              }
            >
              <div className="absolute bg-[#0d0d0f] w-[60px] h-full top-0 -right-10 z-40 blur-sm"></div>
              {Array.from({ length: 13 }, (_, i) => (
                <SwiperSlide key={i} className="text-white flex flex-col">
                  <img
                    src={Original3}
                    alt="image"
                    className="aspect-3/4 object-cover max-w-[120px] min-w-[120px] rounded-2xl cursor-pointer"
                  />
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-[16px]">
                      <img src={Blind} alt="" className="w-full" />
                    </span>
                    <span className="text-[9px] md:text-xs text-gray-500">
                      ozzyb...
                    </span>
                    <span className="text-yellow-200 text-[9px] md:text-xs">
                      $1.01k
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="uppercase text-white text-3xl font-bold -mb-4">
              become a
            </h3>
            <h1 className="gradient-text text-[100px] font-bold uppercase -mb-10">
              king kong
            </h1>
            <div className=" w-[1100px] max-w-full relative flex justify-center px-3">
              <img
                src={Smiley}
                alt="header"
                className="w-[150px] absolute top-10 right-0 2xl:-right-20"
              />
              <img
                src={HeaderLogo}
                alt="header"
                className="w-[150px] absolute -top-8"
              />
              <video
                src={Promo}
                autoPlay
                muted
                loop
                className="rounded-2xl"
              ></video>
              <div className="absolute bottom-14 p-5 border-2 border-[#4a556557] md:w-[90%] rounded-2xl bg-[rgba(0,0,0,0.5)] flex items-center justify-between">
                <h1 className="text-[18px] text-white font-semibold">
                  Stay Tuned
                </h1>
                <span className=" flex items-center w-[25%] justify-between">
                  <img src={Insta} alt="" />
                  <img src={Yt} alt="" />
                  <img src={Twitter} alt="" />
                  <img src={Tiktok} alt="" />
                </span>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.75)] border border-b-0 rounded-2xl text-white w-full -mt-7  backdrop-blur-md border-white/20  shadow-lg z-20 p-5 relative">
              <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.75)] h-30 shadow-[0px_0px_20px_rgba(0,0,0,0.75)] blur-md"></div>
              <div className="flex items-center justify-between border-b border-[#4a556557] py-2">
                <h1 className="text-xl">Latest Bets</h1>
                <div
                  className="py-1 px-3 relative font-semibold flex items-center gap-2  bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700  transition ease-in-out duration-300 rounded-xl text-[14px] "
                  onClick={() => {
                    setTogglebets(!togglebets);
                  }}
                >
                  {bets} <FaChevronDown />
                  <div
                    className={`absolute bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700  transition ease-in-out duration-300 rounded-xl top-[110%] w-[90px] right-0 bg-black ${
                      togglebets ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    } origin-top-right`}
                  >
                    {/* Below is event delegation example where we create an event listener on the top most element rather than all other elements */}
                    <ul
                      className="p-3 px-2 space-y-1"
                      onClick={(e) => {
                        const value = parseInt(e.target.dataset.value, 10);
                        //dataset allows you to access custom data attributes (data-*) on an HTML element.
                        // The 10 ensures parseInt treats the string as a decimal number.
                        //we use parseInt because dataset.value always returns a string
                        if (!isNaN(value)) setBets(value);
                        //Example
                        //<button data-id="123" data-name="Asad">Click Me</button>
                        // const button = document.querySelector("button");
                        // console.log(button.dataset.id); // "123"
                        // console.log(button.dataset.name); // "Asad"
                      }}
                    >
                      {[10, 20, 30, 40].map((value) => {
                        return (
                          <li
                            key={value}
                            data-value={value}
                            className={`p-1 px-2 rounded-md cursor-pointer ${
                              bets === value
                                ? "bg-[rgba(240,220,15,0.15)] text-amber-100"
                                : "hover:bg-[rgba(0,0,0,0.25)]"
                            }`}
                          >
                            {value}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <table className="w-full my-4 text-left text-gray-400 text-[14px] border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>User</th>
                    <th>Time</th>
                    <th>Bet Amount</th>
                    <th>Payout</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 ">
                  {Array.from({ length: bets }, (_, i) => (
                    <tr
                      key={i}
                      className={`${
                        i % 2 === 0 ? "bg-[rgba(54,53,53,0.25)]" : ""
                      }`}
                    >
                      <td className="p-1 rounded-md">
                        <img
                          src={Original3}
                          alt="Profile"
                          className="w-[25px] rounded-sm aspect-3/4 inline-block"
                        />
                        <p className="text-white inline ml-2">Blackjack</p>
                      </td>
                      <td className="p-1 rounded-md">
                        <img
                          src={Blind}
                          alt="Profile"
                          className="w-[25px] rounded-sm inline-block"
                        />
                        <p className="text-white inline ml-2">pnjgames</p>
                      </td>
                      <td className="p-1 rounded-md">
                        {new Date().toLocaleTimeString("en")}
                      </td>
                      <td className="p-1 rounded-md">$30</td>
                      <td className="p-1 rounded-md">$5</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
