import React from "react";
import reactPortfolio from "../assets/react-portfolio-website.png";
import ezutsi from "../assets/ezutsi-photography.png";
import ToDo from "../assets/ToDo.png";
import blogbuster from "../assets/blogbuster.png"
import blogbuster2 from "../assets/blogbuster2.png"


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
                <a href="https://efo-kokuportfoliosite.netlify.app/" target="_blank" rel="noopener noreferrer"> 
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Efo-Koku/react-portfolio-website" target="_blank" rel="noopener noreferrer"> 
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${ezutsi})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ezutsi Photography 
              </span>
              <div className="pt-8 text-center">
                <a href="https://ezutsi-photography.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Efo-Koku/ezutsi-photography" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


            {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${ToDo})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ToDo 
              </span>
              <div className="pt-8 text-center">
                <a href="https://todo-web-app1.netlify.app" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Efo-Koku/ToDo-App" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${blogbuster})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                BlogBuster Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://bloggbuster.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Efo-Koku/blogbuster" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          

          {/* Grid Item */}
          <div 
          style={{backgroundImage: `url(${blogbuster2})` }}
          className="shadow-lg shadow-[#e8eced] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              BlogBuster Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://bloggbuster.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/Efo-Koku/blogbuster" target="_blank" rel="noopener noreferrer">
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
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/" target="_blank" rel="noopener noreferrer">
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
