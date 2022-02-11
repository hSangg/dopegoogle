import {
  BookOpenIcon,
  CalendarIcon,
  LightningBoltIcon,
  NewspaperIcon,
  PhotographIcon,
  SearchIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import SearchResult from '../components/SearchResult'
import { dataResponse } from '../DataResponse'
import { API_KEY, CONTEXT_KEY } from '../key'
import { useState } from 'react'

export default function Result({ results }) {
  const router = useRouter()
  const term = router.query.term
  const inputRef = useRef(null)
  const [search, setSearch] = useState(term)
  return (
    <div className='relative'>
      <div className='absolute left-0 right-0 top-[100%] bg-gradient-to-b from-slate-800  h-[100px]'></div>

      <div className='absolute min-w-[50%] z-10 min-h-[64px] flex items-center left-[50%] translate-x-[-50%] top-5  bg-white px-5 py-4 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg '>
        <figure
          onClick={() => {
            router.push('/')
          }}
          className='w-6 h-6 cursor-pointer'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' />
        </figure>
        <form
          className='flex-grow'
          onSubmit={(e) => {
            e.preventDefault()
            const term = inputRef.current.value
            router.push(`/result?term=${term}`)
          }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
            placeholder='Search...'
            className='outline-none ml-3 w-full border-none bg-transparent text-white'
          />
        </form>
        <div className='flex'>
          <XIcon
            className=' cursor-pointer w-5 text-gray-200'
            onClick={() => (inputRef.current.value = '')}
          />
          <div className='ml-3 cursor-default text-2xl text-gray-400 hidden sm:block'>
            |
          </div>
          <MicrophoneIcon className=' cursor-pointer w-5 hidden sm:block ml-3 text-gray-200' />
          <SearchIcon className=' cursor-pointer w-5 hidden sm:block ml-3 text-gray-200' />
        </div>
      </div>
      <div className='absolute flex items-center justify-between left-[50%] min-w-[50%] translate-x-[-50%] top-[96px] text-white'>
        <ul className='flex gap-4 '>
          <li className='flex cursor-pointer text-gray-300 hover:text-white items-center gap-1 border-b-2  border-indigo-500'>
            <CalendarIcon className='w-4 ' />
            <span className='text-[12px] hidden sm:block '>All</span>
          </li>

          <li className='flex cursor-pointer text-gray-300 hover:text-white items-center gap-1'>
            <PhotographIcon className='w-4 ' />
            <span className='text-[12px] hidden sm:block'>Images</span>
          </li>

          <li className='flex cursor-pointer text-gray-300 hover:text-white items-center gap-1'>
            <NewspaperIcon className='w-4 ' />
            <span className='text-[12px] hidden sm:block'>News</span>
          </li>

          <li className='flex cursor-pointer text-gray-300 hover:text-white items-center gap-1'>
            <VideoCameraIcon className='w-4 ' />
            <span className='text-[12px] hidden sm:block'>Videos</span>
          </li>

          <li className='flex cursor-pointer text-gray-300 hover:text-white items-center gap-1'>
            <BookOpenIcon className='w-4 ' />
            <span className='text-[12px] hidden sm:block'>Books</span>
          </li>
        </ul>

        <div className='flex cursor-pointer text-gray-300 hover:text-white items-center gap-1'>
          <LightningBoltIcon className='w-4 ' />
          <span className='text-[12px] '>Tool</span>
        </div>
      </div>
      <SearchResult results={results} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const useDummyData = false
  const start = context.query.start || 0

  const data = useDummyData
    ? dataResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${start}`
      ).then((response) => {
        return response.json()
      })

  return {
    props: {
      results: data,
    },
  }
}
