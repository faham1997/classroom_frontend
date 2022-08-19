import React from "react";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

function NewCourse() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //const id = localStorage.getItem("token");
  var decoded = jwt_decode(localStorage.getItem("token"));
  const id = decoded.id;
  const profession = decoded.profession;
  console.log(profession);

  async function newCourse(e) {
    e.preventDefault();

    const body = {
      name,
      description,
      id,
    };
    //console.log(body);
    const response = await axios.post(
      `http://localhost:1234/api/createCourse`,
      body
    );
  }

  if (profession === "teacher") {
    return (
      <form onSubmit={newCourse}>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          description:
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewCourse;
