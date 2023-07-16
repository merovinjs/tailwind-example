import React from "react";
import { CiSearch } from "react-icons/ci";
const Headers = () => {
  return (
    <header className="bg-black pt-4 p-2 lowercase">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="text-2xl mr-2 font-bold font-prop bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          twind
        </a>
        <nav className="flex items-center justify-between">
          <div className="hidden  items-center">
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
          <div className="flex w-full text-slate-200 justify-between items-center">
            <div className="relative ">
              <input
                className="bg-transparent placeholder:text-slate-400 placeholder:italic outline-none border-b-2 border-red-950 w-[120px] pr-8 mr-1 
              "
                type="text"
                placeholder="Search"
              />
              <span className="text-xl text-violet-400 absolute right-2 bottom-0.5">
                <CiSearch />
              </span>
            </div>
            <a
              className=" text-xs font-mono   first-letter:uppercase whitespace-nowrap  mr-1 ml-1"
              href="/"
            >
              Sıgn In
            </a>
            <span className="text-xl text-purple-600 ">/</span>
            <a
              className="text-xs font-mono whitespace-nowrap mr-1 ml-1 first-letter:uppercase "
              href="/"
            >
              Sıgn Out
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
