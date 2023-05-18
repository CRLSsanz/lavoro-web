import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  RiBookletLine,
  RiCameraFill,
  RiContactsBookLine,
} from "react-icons/ri";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Lavoros } from "./components/Lavoros";
import { LavoroForm } from "./components/LavoroForm";
import { CrudProvider } from "./context/CrudContext";
import { Details } from "./components/Details";
import { DetailForm } from "./components/DetailForm";

const cargarImagen = require.context("./image", true);

const bag4 =
  "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80";
const bag2 =
  "https://cutewallpaper.org/23/abstract-programmer-wallpaper/3043018453.jpg";

function Header() {
  return (
    <div className="lg:fixed w-[600px] sm:w-11/12 lg:w-48">
      {/**<div className=" w-[540px] sm:w-[700px]  md:w-[950px] lg:w-[1200px]">  */}
      <div className="w-full flex flex-col sm:flex-row-reverse lg:flex-col-reverse lg:w-48">
        <div className=" text-purple-700 text-sm font-semibold tracking-wide w-full flex lg:flex-col lg:gap-6 items-center text-center lg:items-start justify-between p-4 lg:w-48 ">
          <div className="flex flex-col lg:flex-row">
            <div className="text-gray-500 text-3xl sm:flex justify-center hidden">
              <RiHome6Line />
            </div>
            <div className="p-2 lg:pl-2">Home</div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="text-gray-500 text-3xl sm:flex justify-center hidden">
              <RiPieChartLine />
            </div>
            <div className="p-2 lg:pl-2 tracking-wide">Services</div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="text-gray-500 text-3xl sm:flex justify-center hidden">
              <RiSettings4Line />
              <RiPercentLine />
            </div>
            <div className="p-2 lg:pl-2">Features</div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="text-gray-500 text-3xl sm:flex justify-center hidden">
              <RiMailLine />
              <RiNotification3Line />
            </div>
            <div className="p-2 lg:pl-2 tracking-wide ">Contact</div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="text-gray-500 text-3xl sm:flex justify-center hidden">
              <RiLogoutCircleRLine />
            </div>
            <div className="p-2 lg:pl-2">Sign Up</div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col sm:flex-none lg:w-48 lg:items-center items-center sm:items-start">
          <img
            src={cargarImagen(`./logo.png`)}
            className="w-32 h-32 rounded-full border-8 border-gray-50 "
          />
        </div>
      </div>
    </div>
  );
}

function Banner2() {
  return (
    <div
      className=" w-full flex justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bag4})`,
      }}
    >
      <div className=" w-[600px] h-80 sm:h-[500px] sm:w-11/12 lg:max-w-[1024px] xl:w-[1024px]">
        {/**  <div className="w-[540px] sm:w-[700px]  md:w-[950px] lg:w-[1200px]"> */}
        <div className="text-white w-full h-full flex items-end sm:items-center sm:pt-72">
          <div className="w-full flex flex-col sm:text-end sm:items-end">
            <p className="p-2 sm:px-8 text-base bg-gray-50 text-gray-500">
              Shop for the best
            </p>
            <p className="p-2 sm:px-8 text-base bg-gray-900">
              With out carefully cerated vendor list, you'll know waht the buy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className=" w-[600px] sm:w-11/12 lg:max-w-[1024px] xl:w-[1024px]">
      {/**  sm: min'640px' // md: min'768px'  //   lg: min'1024px'  // xl: min'1280px', al final xl:w-[1400px] */}
      <div className="">
        <hr className="mt-6 mb-4 mx-4 bg-gray-300" />
        <div className="bg-gray-100 text-gray-500 w-full flex flex-col lg:flex-row text-justify">
          <div className="flex flex-row items-center p-4 lg:w-3/5">
            <div className="text-4xl pr-4">
              <FiMail />
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus alias nesciunt quisquam id iure,
            </div>
          </div>
          <form className="lg:w-2/5">
            <div className="flex flex-col sm:flex-row items-center p-4">
              <input
                className="w-full p-2 border mb-2 sm:mr-4 sm:w-2/3"
                type="text"
                placeholder="Email"
              />
              {/** 
              <button className="w-full p-2 mb-2 sm:w-1/3 border rounded-lg bg-green-600 text-white"> */}
              <button type="button" className="btn-2 w-full p-2 mb-2 sm:w-1/3">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/** PRUEBA * /}
        <div className="text-xs p-4 w-full mb-4 sm:text-blue-600 md:text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate voluptate cumque consequuntur possimus molestiae porro
          temporibus dolorum{" "}
          <span className="uppercase"> unde molestias, blanditiis aperiam</span>{" "}
          nisi sapiente dolores. Temporibus dignissimos aperiam itaque ipsum!
        </div>
        <div
          className="text-sm p-4 w-full mb-4
             sm:text-blue-600 md:text-red-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate voluptate cumque consequuntur possimus molestiae porro
          temporibus dolorum unde molestias, blanditiis aperiam, nisi sapiente
          dolores. Temporibus dignissimos aperiam itaque ipsum!
        </div>
        <div className="text-base p-4 w-full mb-4 sm:text-blue-600 md:text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate voluptate cumque consequuntur possimus molestiae porro
          temporibus dolorum unde molestias,
          <span className="uppercase">
            {" "}
            unde molestias, blanditiis aperiam
          </span>{" "}
          blanditiis aperiam, nisi sapiente dolores. Temporibus dignissimos
          aperiam itaque ipsum!
        </div>
        {/ ** PRUEBA */}
      </div>
    </div>
  );
}

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <CrudProvider>
      <div>
        <div className="bg-gray-100 w-full min-h-screen">
          <div className="relative flex flex-col lg:flex-row justify-center lg:pt-8 ">
            <div className="flex lg:w-48 justify-center">
              <Header />
            </div>
            <div className="">
              <Banner2 />
              <div className="flex justify-center">
                <BrowserRouter>
                  <nav className="flexx justify-end hidden ">
                    <ul className="text-white">
                      <li className="inline-block pt-3 pr-3 hover:text-[#ec7c6a]">
                        <Link to="/">List Lavoro</Link>
                      </li>
                      <li className="inline-block hover:text-[#ec7c6a]">
                        <Link to="/lav/create">Create Lavoro</Link>
                      </li>
                    </ul>
                  </nav>

                  <Routes>
                    <Route index element={<Lavoros />} />
                    <Route path="lavoro1/" element={<Lavoros />} />
                    <Route path="lavoro1/lav/edit" element={<LavoroForm />} />
                    <Route path="lavoro1/lav/create" element={<LavoroForm />} />
                    <Route path="lavoro1/det/:id/list" element={<Details />} />
                    <Route path="lavoro1/det/edit" element={<DetailForm />} />
                    <Route
                      path="lavoro1/det/:id/create"
                      element={<DetailForm />}
                    />
                    {/** 
                    
                    <Route path="emp/:id/edit" element={<Lavoros />} />
                    */}
                  </Routes>
                </BrowserRouter>
              </div>
              <div className="flex justify-center">
                <Body />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CrudProvider>
  );
}

export default App;
