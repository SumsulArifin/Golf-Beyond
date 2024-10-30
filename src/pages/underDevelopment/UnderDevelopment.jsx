import React from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import TabTitleService from '../../services/TabTitleService'
import { Link } from 'react-router-dom'

const UnderDevelopment = () => {
  TabTitleService.setTabTitle("Under Construction")
  return (
    <HomeLayout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-[1000px] min-h-[800px] flex flex-col justify-center items-center gap-4 p-10">
          <p className='text-8xl uppercase text-center'>Under Construction</p>
          <p className='text-4xl uppercase text-center'>The page is nearly ready</p>
          <Link to={"/"} className='px-10 py-4 bg-primary text-3xl text-light font-semibold rounded-lg'>Back to home</Link>
        </div>
      </div>
    </HomeLayout>
  )
}

export default UnderDevelopment