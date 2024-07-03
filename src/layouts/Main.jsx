import React from "react";

// assets
import wave from "../assets/wave.svg";

// react router dom imports
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Main = () => {

  return (
    <div className="layout">
      <Nav />
      <main>
        <Outlet />
      </main>

      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
