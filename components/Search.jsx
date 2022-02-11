import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { MicrophoneIcon } from '@heroicons/react/solid'

export default function Search() {
  const router = useRouter()
  const inputRef = useRef(null)
  return (
    <>
      <div className='text-white fixed top-0 left-0 right-0 items-center bg-gradient-to-b from-blue-500 h-[75px]'></div>
      <div className='absolute min-w-[50%] z-10 flex items-center left-[50%] translate-x-[-50%] top-5  bg-white px-5 py-4 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg '>
        <figure className='w-8 h-8'>
          <img src='/zoom-dynamic-color.png' />
        </figure>
        <form
          className='flex-1'
          onSubmit={(e) => {
            e.preventDefault()
            const term = inputRef.current.value
            router.push(`/result?term=${term}`)
          }}>
          <input
            ref={inputRef}
            placeholder='Search...'
            className='outline-none ml-2 w-full border-none bg-transparent text-white'
          />
        </form>
        <MicrophoneIcon className='w-5 inline-flex' />
      </div>

      <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <figure className='w-52 h-52'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' />
        </figure>
      </div>

      <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='grid grid-cols-3 gap-5 text-[14px] md:text-[16px]'>
          <p className='item-search'>
            <a href='https://www.google.com/imghp?hl=en' target='_blank'>
              Images
            </a>
          </p>
          <p className='item-search'>
            <a
              href='https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN'
              target='_blank'>
              Maps
            </a>
          </p>
          <p className='item-search'>
            <a href='https://docs.google.com/document/u/0/' target='_blank'>
              Docs
            </a>
          </p>
          <p className='item-search'>
            <a
              href='https://www.google.com/intl/vi/gmail/about/'
              target='_blank'>
              Email
            </a>
          </p>
          <p className='item-search'>
            <a
              href='https://www.google.com.vn/drive/about.html'
              target='_blank'>
              Drive
            </a>
          </p>
          <p className='item-search'>
            <a href='https://www.google.com/slides/about/' target='_blank'>
              Slides
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
