import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" p-4 mt-auto bg-g-white-second text-center shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-g-purple sm:text-center dark:text-g-purple">
        © 2022{" "}
        <a href="https://github.com/SumsarMlohne" className="hover:underline">
          Rasmus Enholm
        </a>
      </span>
    </footer>
  );
};

export default Footer;
