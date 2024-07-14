"use client"

import JobCategory from '@/components/JobCategory'
import MainPage from '@/components/MainPage'
import Navbar from '@/components/Navbar'
import { Home } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'

const Page = () => {
//   const { data: session, status } = useSession()

//   if (status === "loading") {
//     return <div>Loading...</div>
//   }
// console.log(session)
//   if (!session) {
//     return <div>No session</div>
//   }

  return (
    <div>
      <Navbar />
     <MainPage/>
   
    </div>
  )
}

export default Page
