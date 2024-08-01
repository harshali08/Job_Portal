
'use client';

import React, { useEffect, useState } from "react";
import { countJobsByMainCategory } from "@/lib/jobUtils"; // Adjust the path as needed
import { FaHospitalUser } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

interface JobCounts {
  [mainCategory: string]: number;
}

const JobCategory: React.FC = () => {
  // Define the state for job counts
  const [jobCounts, setJobCounts] = useState<JobCounts>({});

  // Simulate fetching job data and updating job counts
  useEffect(() => {
    // Fetch job data (this should be replaced with actual data fetching logic)
    async function fetchJobData() {
      try {
        const response = await fetch('http://localhost:3000/api/jobs'); // Adjust API endpoint as needed
        const data = await response.json();
        
        // Assuming data.jobs contains the job list
        const jobs = data.jobs; 
        
        // Count jobs by main category
        const counts = countJobsByMainCategory(jobs);
        setJobCounts(counts);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    }

    fetchJobData();
  }, []);

  return (
    <div className="m-2 sm:m-12 ">
      <div className="m-2 sm:m-10">
        <div className="flex flex-wrap mx-3 ">
          {/* Repeat the following block for each category */}
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-5 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-hand-coins text-white"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                  Accounting
                </h4>
                <div className="text-gray-500">{jobCounts.Accounting || 0}</div>
              </div>
            </div>
          </div>



          

          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0 my-6">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-speech text-white"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"/><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"/><path d="M17 15a3.5 3.5 0 0 0-.025-4.975"/></svg>
              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">Marketing</h4>
                <div className="text-gray-500">{jobCounts.Marketing || 0}</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                  Customer Support
                </h4>
                <div className="text-gray-500">{jobCounts.Customer_Support || 0}</div>
              </div>
            </div>
          </div>
 
          <div className="w-full mt-6 mb-10 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-red-600 bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-indian-rupee text-white"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="m13 17-5-1h1a4 4 0 0 0 0-8"/></svg>
              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                  Finance
                </h4>
                <div className="text-gray-500">{jobCounts.Finance || 0}</div>
              </div>
            </div>
          </div>
 
          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
              <FaHospitalUser color="white" size={28}/>

              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                  HR
                </h4>
                <div className="text-gray-500">{jobCounts.HR || 0}</div>
              </div>
            </div>
          </div>
 
          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-landmark text-white"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                  Banking
                </h4>
                <div className="text-gray-500">{jobCounts.Banking || 0}</div>
              </div>
            </div>
          </div>
 
          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-violet-600 bg-opacity-75">
              <AiOutlineGlobal color="white" size={28}/>

              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                  IT Jobs
                </h4>
                <div className="text-gray-500">{jobCounts.IT || 0}</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6  px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-amber-600 bg-opacity-75">
              <FaArrowUpRightDots color="white" size={28}/>
              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                Sales
                </h4>
                <div className="text-gray-500">{jobCounts.Sales || 0}</div>
              </div>
            </div>
          </div>


          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
              <div className="p-3 rounded-full bg-rose-600 bg-opacity-75">
              <MdDesignServices color="white" size={28}/>

              </div>

              <div className="mx-5">
                <h4 className="text-lg sm:text-2xl font-semibold text-gray-700">
                 Designer
                </h4>
                <div className="text-gray-500">{jobCounts.Designer || 0}</div>
              </div>
            </div>
          </div>

          
          {/* Add more categories here as needed */}
          
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

