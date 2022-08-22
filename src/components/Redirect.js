import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      //   /showInfo();
    }
  }, []);

  return <></>;
}

export default Redirect;
