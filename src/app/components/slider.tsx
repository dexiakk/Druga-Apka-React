'use client'
import React, { useState } from 'react'

export default function Slider() {
    const productImages = ["/img/product-photo-1.jpg",
        "/img/product-photo-2.jpg",
        "/img/product-photo-3.jpg",
        "/img/product-photo-4.jpg",
        "/img/product-photo-5.jpg",
        "/img/product-photo-6.jpg"]

    const [currentImage, setImage] = useState(0)
    const [currentSmallImage, setSmallImage] = useState(1)

    const changingImages = () => {
        currentImage == 5 ? setImage(0) : setImage(currentImage + 1)
        currentSmallImage == 5 ? setSmallImage(0) : setSmallImage(currentSmallImage+1)
    }

    setInterval(() => {
        changingImages()
    }, 15000);


    const toMainImage = (item:number) => {
        if(item==0)
        {
            setImage(currentSmallImage)
            currentSmallImage == 5 ? setSmallImage(0) : setSmallImage(currentSmallImage+1)
        }
        else if(item==1)
        {
            currentSmallImage+1==6 ? setImage(0) : setImage(currentSmallImage+1)
            
            currentSmallImage+1==3 ? setSmallImage(4) 
            : currentSmallImage+1==4 ? setSmallImage(5)
            : currentSmallImage+1==5 ? setSmallImage(0)
            : currentSmallImage+1==6 ? setSmallImage(1)
            : setSmallImage(currentSmallImage+2)
        }
        else if(item==2)
        {
            currentSmallImage+2==6 ? setImage(0) 
            : currentSmallImage+2==7 ? setImage(1)
            : setImage(currentSmallImage+2)

            currentSmallImage==3 ? setSmallImage(0) 
            : currentSmallImage==4 ? setSmallImage(1)
            : currentSmallImage==5 ? setSmallImage(2)
            : setSmallImage(currentSmallImage+3)
        }
    }
    
    const [visibility, changeVisibility] = useState("hidden")

    const showAndHideBigImage = (item:number) => {
        item == 1 ? changeVisibility("block") : changeVisibility("hidden")
    }

    return (
        <div className='mx-auto sm:mx-0 sm:mt-12 md:mt-0 mt-4'>
            <img onClick={() => {showAndHideBigImage(1)}} src={productImages[currentImage]} alt='productPhoto' className='h-72 min-w-72 rounded-[10%] hover:brightness-75' />
            <div className='flex justify-between w-72 mt-4'>
                <img onClick={() => toMainImage(0)} src={productImages[currentSmallImage]} alt='productPhoto2' className='h-20 rounded-[13%] ml-2 hover:brightness-75' />
                <img onClick={() => toMainImage(1)} src={productImages[currentSmallImage+1 == 6 ? 0 : currentSmallImage+1]} alt='productPhoto3' className='h-20 rounded-[13%] hover:brightness-75' />
                <img onClick={() => toMainImage(2)} src={productImages[currentSmallImage+2 == 6 ? 0 : currentSmallImage+2 == 7 ? 1 : currentSmallImage+2]} alt='productPhoto4' className='h-20 rounded-[13%] mr-2 hover:brightness-75' />
            </div>

            <div className={'bg-white rounded-[1%] h-[700px] w-[700px] top-24 left-[30%] fixed ' + (visibility)}>
                <img onClick={() => {showAndHideBigImage(0)}} src='/img/x-icon.png' alt='x-icon' className='h-12 ml-auto mr-[1px] hover:h-14'/>
                <img src={productImages[currentImage]} />
            </div>
        </div>
    )
}