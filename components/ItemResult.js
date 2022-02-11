import React from 'react'

function ItemResult({ item }) {
  const { formattedUrl, title, snippet } = item
  return (
    <li className='mb-5 p-4 rounded cursor-pointer bg-gradient-to-r from-slate-900'>
      <p className='text-[10px] text-gray-400 lined-clamp'>{formattedUrl}</p>
      <h1
        onClick={() => {
          window.location.href = formattedUrl
        }}
        className='font-[500] hover:underline text-blue-300 text-xl mb-2 mt-1'>
        {title}
      </h1>
      <p className='text-gray-300 text-[14px]'>{snippet}</p>
    </li>
  )
}

export default ItemResult
