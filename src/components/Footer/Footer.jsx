import React from "react";
import FooterLogo from "../../assets/icons/footerlogo.webp";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center border-t border-[#4a556557] p-5">
      <div className="w-full flex items-center justify-center p-3 border-b border-[#4a556557]">
        <img src={FooterLogo} alt="logo" className="w-[120px]" />
      </div>
    </div>
  );
};

export default Footer;
