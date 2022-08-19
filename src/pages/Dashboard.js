import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyCourses from "./MyCourses";
import NewCourse from "./NewCourse";

function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  //const [profession, setProfession] = useState("");

  async function showInfo() {
    const req = await axios.get(`http://localhost:1234/api/info`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.data;
    if (data.status === "ok") {
      setName(data.name);
      //setProfession(data.profession);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      showInfo();
    }
  }, []);

  return (
    <div>
      <NewCourse />
      <MyCourses />
    </div>
  );
}

export default Dashboard;
