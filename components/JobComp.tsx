

"use client";

import { Building2 } from "lucide-react";
import React from "react";
import { ArrowRight } from 'lucide-react';


interface JobCompProps {
  position: string;
  category: string;
  company: string;
  description: string;
  experience: number;
  location:string;
  salary: string;
  posted: string;
}

const JobComp: React.FC<JobCompProps> = (props) => {

  // const currentDate = new Date();
  // const postedDate = new Date(props.posted);
  // const timeDifference = Math.abs(currentDate.getTime() - postedDate.getTime());
  // const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className="m-4 ">
        <div className="group ps-3 mx-2  grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
          <div className="col-span-11 flex flex-col  text-left sm:pl-4">
            <a
              href="#"
              className="flex justify-between overflow-hidden  text-lg font-semibold sm:text-xl"
            >
              <h1>{props.position}</h1>{" "}
              <button className="ml-2 mr-3 p-2 rounded-full bg-red-100 px-2 py-0.5 text-sm text-red-900 capitalize">{props.category}</button>{" "}
            </a>
            <h3 className="flex justify-start text-sm font-semibold text-blue-800 mt-2 mb-2 ">
            <Building2 size={18} strokeWidth={1.75} />&nbsp;  {props.company}
            </h3>
            <p className="overflow-hidden pr-7 text-sm">
              {props.description}
            </p>

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
                  {props.salary}
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
              {/* Posted On :  {new Date(props.posted).toLocaleDateString()} */}
             Posted: {props.posted}
            </h2>
            <div className="flex justify-end mt-3">
              <a  className=" flex justify-center py-2 px-5 border border-transparent text-lg  font-semibold rounded-md text-blue-600 underline">
                View And Apply 
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default JobComp;

