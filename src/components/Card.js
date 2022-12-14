import React from "react";

function Card({ courses }) {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {courses.name}
      </h5>
      <div>
        <p className="mb-3 font-light text-gray-700 dark:text-gray-400 ">
          Created by {courses.teachersID.name}
        </p>
      </div>
      <a
        href="/getenrolled"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Join Class
      </a>
    </div>
  );
}

export default Card;
