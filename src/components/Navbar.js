
import React, { useState } from "react";
import { MdMenu, MdNotificationsActive } from "react-icons/md";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import Menu from "./Menu"; // Assuming you have a Menu component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-[60px] flex justify-between items-center bg-[#10406a] px-4 md:px-8 lg:px-16 xl:px-20">
      <MdMenu
        size={25}
        color="white"
        className="cursor-pointer"
        onClick={toggleMenu}
      />
      <Menu isOpen={isMenuOpen} />

      <div className="flex items-center justify-center gap-2 xl:gap-3">
        <MdNotificationsActive size={25} color="white" className="cursor-pointer" />
        <RxAvatar size={25} color="white" className="cursor-pointer" />
        <RxDashboard size={25} color="white" className="cursor-pointer" />
      </div>
    </div>
  );
};


export default Navbar;
