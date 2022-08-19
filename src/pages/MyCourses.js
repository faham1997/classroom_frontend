import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function MyCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      showCourses();
    }
  }, []);

  async function showCourses() {
    const req = await axios.get(`http://localhost:1234/api/getAllCourse`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.data;
    console.log(data);

    if (data.status === "ok") {
      setCourses(data.courses);
    } else {
      alert(data.error);
    }
  }
  return (
    <div>
      {courses.map(function (courses, idx) {
        return <Card key={idx} courses={courses} />;
      })}
    </div>
  );
}

export default MyCourses;
