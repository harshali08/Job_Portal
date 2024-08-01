import React from 'react'
import Image from 'next/image'
import landingpage from '@/assets/NA_October_10.jpg'
import SearchBar from './SearchBar'

const LandingPage = () => {
  return (
    <div className=''>
      <div className='flex mt-10 md:flex-nowrap flex-wrap '>
        {/* Left Div */}
        <div className='sm:w-1/2 sm:mx-2 sm:px-2 sm:ms-10 '>
            <h1 className=' text-blue-700 text-4xl font-bold sm:mt-20 sm:ms-3 ms-6'>Your Job Search Ends Here....</h1>
            <h3 className=' text-gray-800 text-md font-medium mt-3 sm:ms-3 ms-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h3>
            <div className="flex gap-4 mt-10  lg:ms-10 justify-center lg:justify-start">

  <a className="sm:px-6 px-3 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
    href="/download">
    Upload Resume
  </a>

  <a className="sm:px-6 px-3 py-2 min-w-[120px] text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
    href="/jobs">
    Go to Search
  </a>

</div>
        </div>
         {/* Right Div */}
         <div className='sm:w-1/2 flex justify-center items-center sm:mt-10 lg:mt-0'>
       
          <div >
            <Image src={landingpage} alt='job-search' className='sm:w-1/8'/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default LandingPage
