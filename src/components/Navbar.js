import React from "react";
import { MdMenu } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#10406a] h-full px-4 md:px-8 lg:px-16 xl:px-20">
        <MdMenu size={25} color="white" className="cursor-pointer"/>
      <div className="flex items-center justify-center gap-2 xl:gap-3">
        <MdNotificationsActive size={25} color="white"  className="cursor-pointer"/>
        <RxAvatar size={25} color="white" className="cursor-pointer"/>
        <RxDashboard size={25} color="white" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
