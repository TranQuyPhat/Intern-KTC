import React from 'react'
import { Product } from '../type'

type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

        <img src={product.images[0]} alt="" className='w-full h-80 object-cover rounded'/>
        <h2 className='text-xl font-semibold mt-2'>{product.title}</h2>
        <p className='text-gray-600'>Price: {product.price}</p>
    </div>
  )
}