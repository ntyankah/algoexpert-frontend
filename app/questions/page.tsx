import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Progress from './sections/Progress'

export default function QuestionsPage() {
  return (
    <div >
      <div className='min-h-[540px] bg-gradient-to-r from-[#02203c] to-[#001528] text-white'>
        <div className='container mx-auto h-full flex flex-col'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Progress />
    </div>
  )
}
