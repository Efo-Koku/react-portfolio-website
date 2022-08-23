import React from "react";
import ProjectImg from "../assets/projectImg.png";
import realEstate from "../assets/realEstate.png";
import reactPortfolio from "../assets/reactportfolio.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-500 bg-[#e8eced]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-500 border-yellow-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

    {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">


            {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${reactPortfolio})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Portfolio Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://efo-kokuportfoliosite.netlify.app/" target="_blank" rel="noopener noreferrer"> {/* Make sure to include a link to a working software application here... */}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Efo-Koku/react-portfolio-website" target="_blank" rel="noopener noreferrer"> {/* Make sure to include a link to GitHub here where people can see my code and commits etc... */}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${realEstate})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


            {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${reactPortfolio})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${realEstate})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          


          {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${ProjectImg})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


                  {/* Grid Item */}
                  <div 
          style={{backgroundImage: `url(${realEstate})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Work;
