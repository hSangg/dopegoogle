import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'

export default function Pagination() {
  const router = useRouter()
  const term = router.query.term
  let startIndex = router.query?.start || 0

  return (
    <div className='flex items-center mb-5 justify-around'>
      <div
        onClick={() => {
          startIndex =
            Number.parseInt(startIndex) - 10 > 0
              ? Number.parseInt(startIndex) - 10
              : 0
          router.push(`/result?term=${term}&start=${startIndex}`)
        }}
        className='flex flex-col cursor-pointer items-center gap-1'>
        <ChevronLeftIcon className='w-5' />
        Previous
      </div>

      <div
        onClick={() => {
          startIndex = Number.parseInt(startIndex) + 10
          router.push(`/result?term=${term}&start=${startIndex}`)
        }}
        className='flex flex-col cursor-pointer items-center gap-1'>
        <ChevronRightIcon className='w-5' />
        Next
      </div>
    </div>
  )
}
