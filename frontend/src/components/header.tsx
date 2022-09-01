import React from "react";
import Navbar from "./navbar";

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-g-green text-center shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="sm:text-center">
        <h1 className="text-white md:text-5xl text-3xl pt-4 font-bold">
          Gambit challenge
        </h1>
      </span>
    </header>
  );
};

export default Header;
