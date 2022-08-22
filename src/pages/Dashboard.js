//import axios from "axios";
//import React, { useState, useEffect } from "react";
import MyCourses from "./MyCourses";

function Dashboard() {
  return (
    <div>
      <h1 className="font-small leading-tight text-2xl mt-0 mb-2 text-black-600 text-center	font-bold ">
        Dashboard
      </h1>
      <MyCourses />
    </div>
  );
}

export default Dashboard;
