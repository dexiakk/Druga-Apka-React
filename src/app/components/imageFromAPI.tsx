import React, { useState, useEffect } from 'react'

export default function ImageFromAPI({ item }: { item: string }) {
    const [productImage, setImage] = useState("")

    fetch("https://fakestoreapi.com/products/" + item)
        .then(resp => resp.json())
        .then(data => setImage(data.image))
        
    return (
        <img className='sm:h-72 sm:min-w-72 h-40 min-w-40 rounded-[10%] hover:brightness-75' src={productImage} alt='otherProduct' />
    )
}