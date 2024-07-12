"use client"

import Navbar from '@/components/Navbar'
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
     Register
    </div>
  )
}

export default Page
