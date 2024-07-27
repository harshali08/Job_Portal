import SidebarComp from '@/components/SidebarComp'
import  UserDash from '@/components/UserDash'
import React from 'react'

const Page = () => {
  return (
    <div className='flex '>
      <div className='w-1/6'>
        <SidebarComp />
      </div>
      <div className='w-5/6'>
        <UserDash />
      </div>
    </div>
  )
}

export default Page
