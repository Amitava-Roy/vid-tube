import React from "react";
import NavigationHeader from "../../NavigationHeader";
import Search from "../Search";
import UserOptions from "./userOptions/UserOptions";

const Navbar = () => {
  return (
    <div className="w-full px-4 h-16 fixed z-20 flex justify-between items-center bg-stone-950">
      <NavigationHeader />
      <Search />
      <UserOptions />
    </div>
  );
};

export default Navbar;
