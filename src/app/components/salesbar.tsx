import React from 'react'

export default function Salesbar() {
    return (
        <div className='xl:mt-0 xl:ml-auto xl:mr-0 xl:pl-20 md:mt-16 sm:mt-20 sm:ml-0 mx-auto mt-16'>
            <div className='bg-[#18181b] w-64 h-56 rounded-[8px]'>
                <div className='pt-4 pb-6'>
                    <span className='text-[14px] bg-[#52525b] rounded-[10%] p-1 px-2 ml-4'>Expires in 2 days</span>
                </div>
                <div className='ml-4'>
                    <span className='font-bold text-[24px] text-[#50e3c2] ml-1 mr-3'>-10%</span>
                    <span className='font-bold text-[24px] mr-3'>$37.8</span>
                    <span className='align-top text-[19px] text-[#a1a1aa] line-through'>$42</span>
                </div>
                <div className='flex items-center mt-6'>
                    <div className='ml-[-4px] h-3 w-3 bg-[#ff0080] rounded-[50%]'></div>
                    <span className='ml-2 text-[#a1a1aa]'>Get it</span>&nbsp;
                    <span className='font-medium'>Jan 7</span>&nbsp;
                    <span className='text-[#a1a1aa]'> by 5pm</span>
                </div>
                <div className='bg-[#0070f3] mt-6 pt-1 pb-1 text-[20px] text-center mx-8 rounded-[8px]'>Add to Cart</div>
            </div>
        </div>
    )
}