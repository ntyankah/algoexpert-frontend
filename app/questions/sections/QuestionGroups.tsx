import ColoredBall from '@/components/ColoredBall'
import { freeTag } from '@/components/svgs/free-tag'
import { openStarSvg } from '@/components/svgs/star'
import { strikeThroughSvg } from '@/components/svgs/strikethrough'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const styles = {
    easy: 'bg-[#34ed43] shadow-easy',
    medium: 'bg-[#51adef] shadow-medium',
    hard: 'bg-[#ef5151] shadow-hard',
    veryHard: 'bg-[#383535] shadow-veryHard',
}

export default function QuestionGroups() {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10'>
        <QuestionGroup />
        <QuestionGroup />
        <QuestionGroup />
        <QuestionGroup />
        <QuestionGroup />
    </div>
  )
}


const QuestionGroup = () => {
    return (
        <div>
            <h3 className='text-gray-600 text-xl font-semibold mb-5 mt-10'>Easy - 0/31</h3>
            <div className='flex flex-col gap-2'>
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
            </div>
        </div>
    )
}

const QuestionItem = () => {
    const difficulty = 'easy'
    return (
        <div className='bg-white p-2 rounded shadow-custom flex items-center gap-2 h-12'>
            <ColoredBall type='white' />
            <Link href={`/questions/1`}>
                <span className='text-[15px] font-semibold text-gray-600'>Validate Subsequence</span>
            </Link>
            <span className='flex-spacer flex-1'></span>
            <span>{freeTag}</span>
            <span>{openStarSvg}</span>
            <span>{strikeThroughSvg}</span>
            <span className={cn('h-12 w-6 rounded-r', styles[difficulty])}></span>
        </div>
    )
}