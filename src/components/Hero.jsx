import React from "react";

const Hero = () => {
  //h-128 tailwing configde oluşturuldu
  return (
    <>
      <section className="h-96 lg:h-128 group relative">
        <img src="/braking.jpg" className="h-full w-full object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white">
          <div className="container pl-10 lg:pl-5">
            <h3 className="text-orange-500 tracking-wider group-hover:mb-1 duration-500">
              Action,Drama,Thriller
            </h3>
            <h1 className="text-4xl lg:text-6xl text-orange-500 group-hover:mb-1 duration-500">
              Braking Bad
            </h1>
            <p className=" text-orange-500 group-hover:mb-2 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              commodi fugiat at facere repellendus recusandae suscipit
              voluptatibus fuga aut? Tenetur dolores minus quos praesentium
              asperiores velit aperiam! Quidem, quam ipsa.
            </p>

            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000">
              <div className="flex space-x-2 items-center cursor-pointer">
                <a
                  href="#"
                  className="text-orange-900 uppercase lg:text-lg hover:text-orange-500 duration-500"
                >
                  Watch Trailer
                </a>
                <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-orange-950 text-orange-500">
                  <i className="fas fa-play">X</i>
                </div>
              </div>
              <div className="flex space-x-2 items-center cursor-pointer">
                <a
                  href="#"
                  className="text-orange-900 uppercase lg:text-lg hover:text-orange-500 duration-500"
                >
                  details
                </a>
                <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-orange-950 text-orange-500">
                  <i className="fas fa-play">X</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full  bg-red-950"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-indigo-500"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-indigo-500"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-indigo-500"></div>
        </div>
        <div className="bg-indigo-500 "></div>
      </section>
    </>
  );
};

export default Hero;
