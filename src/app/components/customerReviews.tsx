import React from 'react'
import SingleCustomerComment from './singleCustomerComment'

export default function CustomerReviews() {
  return (
    <div>
      <div className='flex flex-wrap'>
        <div className='ml-[-4px] h-3 w-3 bg-[#ff0080] rounded-[50%]'></div>
        <h2 className='text-[20px] font-bold ml-1'>Customer Reviews</h2>
      </div>
      <div>
        <SingleCustomerComment />
        <SingleCustomerComment />
        <SingleCustomerComment />
      </div>
    </div>
  )
}