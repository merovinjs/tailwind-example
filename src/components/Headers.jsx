import React from "react";

const Headers = () => {
  return (
    <header className="bg-black py-4 lowercase lg:py-12 px-8 lg:uppercase">
      <div className="flex items-center justify-between space-x-4 lg:items-center lg:justify-around flex-1">
        <a
          href="/"
          className="text-4xl lg:text-6x font-bold font-prop lg:uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          twind
        </a>
        <nav className="flex items-center justify-between space-x-8 lg:space-x-16 ">
          <div className="hidden  items-center space-x-4 lg:flex  text-red-600">
            <a className="hoverLink" href="/">
              Movies
            </a>
            <a className="hoverLink" href="/">
              Celebration
            </a>
            <a className="hoverLink" href="/">
              Blog
            </a>
            <a className="hoverLink" href="/">
              News
            </a>
            <a className="hoverLink" href="/">
              About
            </a>
          </div>
          <div className="flex text-slate-200 justify-between items-center space-x-2 ">
            <span>SearchIcon</span>
            <a className="" href="/">
              Sıgn In
            </a>
            <a className="" href="/">
              Sıgn Out
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
