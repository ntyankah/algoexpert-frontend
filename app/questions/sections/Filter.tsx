'use client'
import React, {useState} from 'react'
import { twMerge } from 'tailwind-merge'

export default function Filter() {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className='my-20'>
        <div className="container mx-auto">
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <Button className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 490.1 490.1" className="size-6"><g stroke="currentColor" strokeWidth="5"><path d="m194.5 324.35 15-24.2c3.6-5.8 1.8-13.3-4-16.9-5.7-3.6-13.3-1.8-16.9 4l-15 24.2c-27.2 43.9-66 69.1-106.6 69.1H12.2c-6.8 0-12.2 5.5-12.2 12.3s5.5 12.3 12.2 12.3h54.9c49.3-.2 95.7-29.6 127.4-80.8zM486.4 88.75 427 29.25c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l38.6 38.6h-56.900000000000006c-49.2 0-95.7 29.4-127.4 80.6l-9.2 14.9c-3.6 5.8-1.8 13.3 4 16.9 2 1.2 4.2 1.8 6.4 1.8 4.1 0 8.1-2.1 10.4-5.8l9.2-14.9c27.2-43.9 66-69 106.6-69h56.800000000000004l-38.6 38.6c-4.8 4.8-4.8 12.5 0 17.3 2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l59.5-59.5c4.7-4.8 4.7-12.6-.1-17.3zm-26.1 8.8v-.4l.2.2z"></path><path d="M409.6 460.85c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l59.5-59.5c4.8-4.8 4.8-12.5 0-17.3l-59.5-59.4c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l38.6 38.6h-55.1c-40.5 0-79.4-25.2-106.6-69.1l-90.2-145.7c-31.7-51.3-78.2-80.6-127.4-80.6H12.2c-6.8 0-12.2 5.5-12.2 12.3s5.5 12.3 12.2 12.3h56.7c40.5 0 79.4 25.2 106.6 69l90.2 145.7c31.7 51.3 78.2 80.7 127.4 80.7h55.1l-38.6 38.6c-4.7 4.6-4.7 12.3 0 17.1zm50.7-68.3.2.2-.2.2v-.4z"></path></g></svg>
                    <span>Pick Random</span>
                    </Button>
                </div>
                <div className='flex justify-center'>
                    <Button>Group by Difficulty</Button>
                    <Button>Group by Category</Button>
                    <Button>Group Randomly</Button>
                </div>
                <div>
                    <Button className='flex gap-2 items-center focus:grp-filter-h-5' onClick={() => setIsExpanded(!isExpanded)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6"><path d="M3 6h11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h1a1 1 0 0 0 0-2h-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2H3a1 1 0 0 0 0 2m13-2h2v2h-2zm5 7h-9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2H3a1 1 0 0 0 0 2h3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h9a1 1 0 0 0 0-2M8 13v-2h2v2zm13 5h-3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2H3a1 1 0 0 0 0 2h9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h3a1 1 0 0 0 0-2m-7 2v-2h2v2z"></path></svg>
                        <span>Filters</span>
                    </Button>
                </div>
            </div>
            <div className={`flex justify-between mt-5 transition-all duration-500 overflow-hidden id-filters ${isExpanded? 'h-5': 'h-0'}`}>
                <div className='bg-white'>Difficulty</div>
                <div className='bg-white'>Favorite</div>
                <div className='bg-white'>Strike Through</div>
                <div className='bg-white'>Instructors</div>
            </div>
        </div>
    </div>
  )
}

const Button: React.FC<React.ComponentPropsWithoutRef<'button'>> = ({children, className, ...props}) => {
    return (
        <button {...props} className={twMerge('cursor-pointer text-[#626ee3] px-10 py-3 font-lato font-semibold text-[16px] hover:text-gray-600 focus:text-gray-600 transition duration-300 focus:bg-white rounded focus:shadow-md', className)}>
            {children}
        </button>
    )
}
