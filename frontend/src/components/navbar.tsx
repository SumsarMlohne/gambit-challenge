import React from "react";

interface Props {
  setShowRaw: Function;
  showRaw: Boolean;
}

const Navbar: React.FC<Props> = (props) => {
  const { setShowRaw, showRaw } = props;
  return (
    <nav className="w-full flex justify-between px-4 py-8 mx-auto bg-g-dark sticky top-0">
      <div>
        <h3 className="text-2xl font-medium text-g-white">Gambit Challenge</h3>
      </div>
      <div className="space-x-8 flex">
        <button
          onClick={() => setShowRaw(!showRaw)}
          className="bg-g-purple transform transition-all hover:scale-105 text-white font-semibold px-4  rounded"
        >
          {showRaw ? "PARSED" : "RAW"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
