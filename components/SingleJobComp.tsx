"use client";

import React from "react";
import { Building2 } from 'lucide-react';

interface SingleJobCompProps {
  position: string;
  category: string;
  company: string;
  description: string;
  experience: number;
  location: string;
  salary: string;
  posted: string; // Ensure this is in a format that Date can parse
}

const SingleJobComp: React.FC<SingleJobCompProps> = (props) => {
  const calculateDaysAgo = (dateString: string): string => {
    const postedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysAgo === 0) {
      return 'Today';
    } else if (daysAgo === 1) {
      return '1 day ago';
    } else {
      return `${daysAgo} days ago`;
    }
  };

  return (
    <div>
      <div className="m-4">
        <div className="group ps-3 mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
          <div className="col-span-11 flex flex-col text-left sm:pl-4">
            <a
              href="#"
              className="flex justify-between overflow-hidden text-lg font-semibold sm:text-xl"
            >
              <h1>{props.position}</h1>{" "}
              <button className="ml-2 mr-3 p-2 rounded-full bg-red-100 px-2 py-0.5 text-sm text-red-900 capitalize">
                {props.category}
              </button>{" "}
            </a>
            <h3 className="flex justify-start text-sm font-semibold text-blue-800 mt-2 mb-2">
              <Building2 size={18} strokeWidth={1.75} />&nbsp; {props.company}
            </h3>
            <p className="overflow-hidden pr-7 text-sm">{props.description}</p>

            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div className="">
                Experience:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {props.experience} Years
                </span>
              </div>
              
              <div className="">
                Salary:
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  {props.salary} k
                </span>
              </div>
              <div className="">
                Location:
                <span className="ml-2 mr-3 rounded-full bg-purple-100 px-2 py-0.5 text-purple-900">
                  {props.location}
                </span>
              </div>
            </div>
            <h2 className="overflow-hidden pr-7 text-sm mt-3 text-md font-semibold">
              Posted On: {calculateDaysAgo(props.posted)}
            </h2>
            <div className="flex justify-center mt-3">
              <button className="flex justify-center py-2 px-5 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobComp;
