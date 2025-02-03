import React from "react";
import { FaLocationDot } from "react-icons/fa6";
function LocationSearchPannel() {
  const locations = [
    "283, Shri Ram Nagar, near Shiv Mandir, Indore",
    "123, MG Road, near Central Mall, Indore",
    "456, Vijay Nagar, near C21 Mall, Indore",
    "789, Rajwada, near Rajwada Palace, Indore",
    "101, Palasia, near Palasia Square, Indore",
    "202, Bhawarkua, near Bhawarkua Square, Indore",
    "303, Sapna Sangeeta, near Sapna Sangeeta Mall, Indore",
    "404, Khajrana, near Khajrana Temple, Indore",
  ];
  return (
    <div className="overflow-y-auto h-screen ">
      {locations.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="flex border-2 p-3 rounded-xl border-gray-100 active:border-black  items-center justify-start gap-4"
            >
              <h2 className="bg-gray-100  flex items-center justify-center rounded-full w-10 h-10">
                <FaLocationDot className="text-lg" />
              </h2>
              <h4 className="text-lg font-medium">{item}</h4>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default LocationSearchPannel;
