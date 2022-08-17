import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

function Dashboard() {
  //const navigate = useNavigate();
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

  async function populateQuote() {
    const req = await fetch("http://localhost:1234/api/info", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setName(data.name);
      setProfession(data.profession);
    } else {
      alert(data.error);
    }
  }

  populateQuote();

  return (
    <div>
      your logged in as : {name} <br></br>
      your role is as : {profession}
    </div>
  );
}

export default Dashboard;
