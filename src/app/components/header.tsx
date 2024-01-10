import React from 'react'

export default function Header() {

    return (
        <header className='bg-[#27272a] md:w-[80%] w-[90%] rounded-[25px] mx-auto mt-10 flex justify-between items-center'>
            <div>
                <img src='/img/logo.png' alt='logo' className='h-20 md:h-24 rounded-full pt-2 pb-2 md:ml-5 ml-4' />
            </div>
            <div className='mr-auto ml-[20px]'>
                <form>
                    <input type='text' className='inputMagnifyingGlass hidden sm:block md:w-[240px] mr-7' />
                </form>
            </div>
            <div className='flex'>
                <img src='/img/lupa.png' alt='PierniczekPhoto' className='h-16 md:h-24 sm:hidden rounded-[50%] pt-3 pb-3 md:mr-5 mr-4 hover:brightness-75' />
                <img src='/img/Cart.png' alt='CartIcon' className='h-16 md:h-24 rounded-[50%] pt-3 pb-3 md:mr-5 mr-3 hover:brightness-75' />
                <img src='/img/UserPhoto.png' alt='PierniczekPhoto' className='h-16 md:h-24 rounded-[50%] pt-3 pb-3 md:mr-5 mr-4 hover:brightness-75' />
            </div>
        </header>
    )
}