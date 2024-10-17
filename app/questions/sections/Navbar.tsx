import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between py-5 px-10 text-white/80'>
      <div className='flex flex-col gap-2 font-jura'>
        <div className='flex gap-3 cursor-pointer'>
          <span className="hover:animate-spin hover:duration-1000">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 102 112" className="text-white size-10" style={{transform: 'rotate(200deg)'}}><path fill="currentColor" fillRule="evenodd" d="M27.441 99.894c5.912-3.436 12.456-8.227 19.197-14.155a204 204 0 0 1-13.527-13.876 208 208 0 0 1-8.984-10.825c-6.016 8.605-10.636 16.844-13.62 24.038-2.454 5.913-3.668 10.8-3.833 14.429-.167 3.704.765 5.079 1.302 5.548s2.023 1.212 5.672.554c3.575-.645 8.258-2.497 13.793-5.713m10.156-32.015A198 198 0 0 0 51.09 81.685a198 198 0 0 0 13.169-13.693A201 201 0 0 0 74.124 55.8a201 201 0 0 0-9.68-11.76 198 198 0 0 0-13.54-13.85A198 198 0 0 0 37.24 44.35a201 201 0 0 0-9.437 11.62 201 201 0 0 0 9.794 11.91M4.025 109.57c7.715 6.751 26.863-1.849 47.101-19.788 20.28 17.65 39.37 26.018 47.005 19.238 8.126-7.215.753-29.34-16.563-53.254C98.516 31.872 105.61 9.89 97.474 2.772c-7.65-6.694-26.543 1.706-46.593 19.34C30.615 4.481 11.541-3.875 3.91 2.901c-8.107 7.198-.788 29.236 16.44 53.085C3.1 80.107-4.177 102.392 4.025 109.57m87.447-24.996c-3.01-7.11-7.637-15.238-13.64-23.721a208 208 0 0 1-9.058 11.09A205 205 0 0 1 55.578 85.7c6.702 5.786 13.198 10.46 19.067 13.815 5.56 3.176 10.255 4.994 13.835 5.613 3.654.631 5.134-.121 5.667-.595.534-.473 1.456-1.854 1.262-5.558-.191-3.627-1.44-8.505-3.937-14.4m-.48-57.308c-2.916 7.029-7.393 15.057-13.21 23.449a208 208 0 0 0-8.851-10.656 204 204 0 0 0-13.558-13.904c6.56-5.721 12.923-10.358 18.685-13.707 5.536-3.216 10.218-5.068 13.793-5.713 3.65-.658 5.136.084 5.672.554.537.47 1.47 1.844 1.302 5.548-.165 3.629-1.379 8.516-3.832 14.43M27.397 12.408c5.854 3.345 12.332 8.005 19.016 13.77a204 204 0 0 0-13.687 14.22 208 208 0 0 0-8.622 10.52c-5.952-8.428-10.54-16.502-13.534-23.57-2.496-5.896-3.746-10.774-3.936-14.401-.195-3.703.727-5.084 1.26-5.558.534-.473 2.015-1.226 5.669-.595 3.579.619 8.275 2.437 13.834 5.614M56 56a5 5 0 1 1-10 0 5 5 0 0 1 10 0m6 0c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11" clipRule="evenodd"></path></svg>
          </span>
          <span className='text-4xl tracking-wide'>AlgoExpert</span>
        </div>
        <div>
          <span className='text-lg tracking-wider font-[600] text-[#8d96eb]'>Ace the Technical Interview</span>
        </div>
      </div>
      <div className='pt-2'>
        <ul className='flex gap-5 font-light text-[14px] cursor-pointer'>
          <li>Products</li>
          <li>Content</li>
          <li>Team</li>
          <li className='text-white italic font-bold'>Purchase</li>
        </ul>
      </div>
      <div>
        <button className='text-[14px] border-2 border-transparent hover:border-[#626ee3] transition duration-500 py-2 px-3 rounded text-white/90'>Log In</button>
      </div>
    </div>
  )
}
