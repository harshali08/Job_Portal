// import React from 'react'
// // import { BarChartComp } from './BarChartComp'
// import { RadialJobData } from './RadialJobData'
// import DashBox from './DashBox'
// import {LineChartComp} from './LineChartComp'

// const UserDash = () => {
//   return (
//     <div >
//       <div className='flex justify-around flex-wrap '>
//       <DashBox/>
//       <RadialJobData/>
//       </div>
//       {/* <BarChartComp/> */}
//       <LineChartComp/>
      

//     </div>
//   )
// }

// export default UserDash
"use client"
import React, { useEffect, useState } from 'react';
// import { BarChartComp } from './BarChartComp'
import { RadialJobData } from './RadialJobData'
import DashBox from './DashBox'
import { LineChartComp } from './LineChartComp'
import { LoadingComp } from './LoadingComp';
import { Skeleton } from "@/components/ui/skeleton"


// Simulate data fetching function
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('data'), 2000); // Simulating 2 seconds delay
  });
}

const UserDash = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchData(); // Simulate data fetch
      setLoading(false); // Set loading to false after data is fetched
    };

    loadData();
  }, []);

  if (loading) {
    // return <div className='loading-spinner'>Loading...</div>; // Customize your loading sign here
    <Skeleton className="w-[100px] h-[20px] rounded-full" />

  }

  return (
    <div>
      <div className='flex justify-around flex-wrap'>
        <DashBox/>
        <RadialJobData/>
      </div>
      {/* <BarChartComp/> */}
      <LineChartComp/>
    </div>
  )
}

export default UserDash;
