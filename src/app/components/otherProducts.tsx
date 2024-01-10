import React from 'react'
import OtherProduct from './otherProduct'

export default function OtherProducts() {
    return (
        <div className='mt-20'>
            <div className='flex flex-wrap'>
                <div className='ml-[-4px] h-3 w-3 bg-[#ff0080] rounded-[50%]'></div>
                <h2 className='text-[20px] font-bold ml-1'>Recomended Products for You</h2>
            </div>
            <span className='text-[#a1a1aa] ml-3'>Based on your preferences and shopping habits</span>
            <div className='flex flex-wrap justify-between mt-8'>
                <OtherProduct prop="1"/>
                <OtherProduct prop="2"/>
                <OtherProduct prop="3"/>
                <OtherProduct prop="4"/>
            </div>
        </div>
    )
}