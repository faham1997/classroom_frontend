import { useState, useEffect } from "react";
import Redirect from "../components/Redirect";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";

//import NewCourse from "./NewCourse";

function MyProfile() {
  Redirect();
  const navigate = useNavigate();
  const [information, setInformation] = useState("");

  async function showInfo() {
    const req = await axios.get(`http://localhost:1234/api/info`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.data;
    // /console.log(data);
    if (data.status === "ok") {
      setInformation(data.user);
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
      <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg"
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold capitalize">
              {information.name}
            </h2>
            <span className="text-sm dark:text-gray-400 capitalize">
              {information.profession}.
            </span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-400">{information.email}</span>
            </span>
            <span className="flex items-center space-x-2"></span>
          </div>
          <ModalComponent />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
