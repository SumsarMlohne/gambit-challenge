import React from "react";

interface Props {
  setShowRaw: Function;
  showRaw: Boolean;
}

const Navbar: React.FC<Props> = (props) => {
  const { setShowRaw, showRaw } = props;
  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto bg-g-dark sticky top-0">
      <div>
        <h3 className="text-2xl font-medium text-g-white">Gambit Challenge</h3>
      </div>
      <div className="space-x-8 flex">
        <button
          onClick={() => setShowRaw(!showRaw)}
          className="bg-g-purple hover:bg-transparent text-white font-semibold hover:text-white px-4 border border-g-purple hover:border-g-purple rounded"
        >
          {showRaw ? "Parse data" : "Back"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
