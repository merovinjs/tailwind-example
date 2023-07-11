import React from "react";

const HeaderExaple = () => {
  return (
    <>
      <header class="dark:bg-black bg-white py-6 lg:py-12 dark:text-gega-grey text-black uppercase">
        <div class="container flex items-center justify-between space-x-8 lg:space-x-16">
          <a
            href="#"
            class="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-white to-gega-grey"
          >
            GEGA
          </a>

          <div class="block md:hidden pr-4">
            <div class="space-y-1 cursor-pointer">
              <div class="bg-gega-grey w-8 h-1 rounded-full"></div>
              <div class="bg-gega-grey w-8 h-1 rounded-full"></div>
              <div class="bg-gega-grey w-8 h-1 rounded-full"></div>
            </div>
          </div>

          <nav class="hidden md:flex justify-between flex-1">
            <div class="flex items-center lg:text-lg space-x-4 lg:space-x-8">
              <a href="#" class="hover:text-gega-melon transition duration-500">
                movies
              </a>
              <a href="#" class="hover:text-gega-melon transition duration-500">
                celebrities
              </a>
              <a href="#" class="hover:text-gega-melon transition duration-500">
                blog
              </a>
              <a href="#" class="hover:text-gega-melon transition duration-500">
                news
              </a>
              <a href="#" class="hover:text-gega-melon transition duration-500">
                about
              </a>
            </div>

            <div class="flex items-center space-x-4 lg:space-x-8">
              <form>
                <div class="group border-r px-4 mx-4 py-1 border-gega-red">
                  <input
                    type="text"
                    class="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500 "
                  />
                  <button class="-ml-4 group-hover:ml-0 transition duration-500">
                    <i class="fas fa-search group-hover:text-gega-red transition duration-500"></i>
                  </button>
                </div>
              </form>

              <div class="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
                <a href="#">Login</a>
                <a
                  href="#"
                  class="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderExaple;
