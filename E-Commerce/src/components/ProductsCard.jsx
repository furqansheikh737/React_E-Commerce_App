import React from 'react'

const ProductsCard = ({product}) => {
  console.log(product)
  return (
    <div className='group'>
     <div className='w-full h-96 cursor-pointer overflow-hidden'>
      <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt='productImage'/>
     </div>
     <div className='w-full border-[1px] px-2 py-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-base font-bold'>{product.title.substring(0,15)}</h2>
        </div>
        <div className='flex gap-2 relative overflow-hidden w-28 text-sm'>
          <div className='flex gap-2 transform group-hover:translate-x-32 transition-transform duration-500'>
          <p className='line-through text-gray-500'>${product.oldPrice}</p>
          <p className='font-semibold'>${product.price}</p>
          </div>
          <p className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform translate-x-32 group-hover:translate-x-0 transition-transform duration-500 cursor-pointer'>add to card</p>
        </div>
      </div>

     </div>
    </div>
  )
}

export default ProductsCard