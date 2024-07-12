// "use client"

// import React from "react";
// import { useState,useEffect } from "react";

// const JobComp = (props) => {

    

//   return (
//     <div>
//       <div className="m-5">
//         <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
//           <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
//             <a
//               href="#"
//               className="flex justify-between overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
//             >
//               <h1>{props.position}</h1>{" "}
//               <button
//                 className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 {props.category}
//               </button>{" "}
//             </a>
//             <h3 className="text-sm font-semibold text-gray-800 mb-2">
//               {props.company}
//             </h3>
//             <p className="overflow-hidden pr-7 text-sm">
//              {props.description}
//             </p>

//             <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
//               <div className="">
//                 Experience:
//                 <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
//                   {" "}
//                   {props.experience} Years{" "}
//                 </span>
//               </div>
//               <div className="">
//                 Salary:
//                 <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
//                   {props.salary}
//                 </span>
//               </div>
//             </div>
//             <h2 className="overflow-hidden pr-7 text-sm mt-2 text-md font-semibold" >
//              Last Updated: {props.posted} days ago
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobComp;

"use client";

import React from "react";

interface JobCompProps {
  position: string;
  category: string;
  company: string;
  description: string;
  experience: number;
  salary: string;
  posted: number;
}

const JobComp: React.FC<JobCompProps> = (props) => {
  return (
    <div>
      <div className="m-4 ">
        <div className="group ps-3 mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
          <div className="col-span-11 flex flex-col  text-left sm:pl-4">
            <a
              href="#"
              className="flex justify-between overflow-hidden  text-lg font-semibold sm:text-xl"
            >
              <h1>{props.position}</h1>{" "}
              <button className="ml-2 mr-3 p-2 rounded-full bg-orange-100 px-2 py-0.5 text-sm text-orange-900 capitalize">{props.category}</button>{" "}
            </a>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              {props.company}
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
            </div>
            <h2 className="overflow-hidden pr-7 text-sm mt-3 text-md font-semibold">
              Posted On : {props.posted} days ago
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobComp;

