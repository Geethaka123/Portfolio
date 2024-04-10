import React from 'react'
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";

const About = () => {
  return (
    <div
      id="about"
      className=" text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3"
    >
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4 ">
        <dir className="max-w-[80%] mx-auto">
          <h2 className="font-bold text-3xl mb-4">I can make websites</h2>
          <p className="text-gray-200">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </dir>
      </div>
      <div className="hidden md:block sm:col-span-1 glass overflow-hidden ">
        <img className="w-[200px] md:w-[500px] absolute " src={notebookM} />
      </div>
      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img className="w-[200px] md:w-[500px] absolute " src={mobileR} />
      </div>
      <div className="md:hidden relative overflow-hidden h-[200px] glass">
        <img className="w-[400px] absolute " src={notebookM} />
        <img className="w-[200px] right-0 absolute " src={mobileR} />
      </div>
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4 ">
        <dir className="max-w-[80%] mx-auto">
          <h2 className="font-bold text-3xl mb-4">I can make websites</h2>
          <p className="text-gray-200">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </dir>
      </div>
    </div>
  );
}

export default About
