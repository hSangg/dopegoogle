import React from 'react'
import ItemResult from './ItemResult'
import Pagination from './Pagination'

export default function SearchResult({ results }) {
  const { items } = results
  const formattedTotalResults =
    results?.searchInformation?.formattedTotalResults
  const searchTime = results?.searchInformation?.searchTime
  return (
    <div className='absolute text-white left-[50%] min-w-[65%] translate-x-[-50%] top-[140px]'>
      <hr className=' opacity-30'></hr>
      <p className='text-[12px] mt-2'>
        About {formattedTotalResults} results in {searchTime}
      </p>

      <ul className='mt-3'>
        {items?.map((item, i) => (
          <ItemResult key={i} item={item} />
        ))}
      </ul>

      <Pagination />
    </div>
  )
}
