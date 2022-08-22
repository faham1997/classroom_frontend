import React from "react";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setShowModal } from "../components/ModalComponent";

function NewCourse({ setShowModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //const id = localStorage.getItem("token");
  var decoded = jwt_decode(localStorage.getItem("token"));
  const id = decoded.id;
  const profession = decoded.profession;
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
    setShowModal(false);
  }

  if (profession === "teacher") {
    return (
      <form onSubmit={newCourse}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Name :
        </label>
        <input
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Description :
        </label>
        <input
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Course Description"
          type="textarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <button
          className="mt-6 md:w-2/3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default NewCourse;
