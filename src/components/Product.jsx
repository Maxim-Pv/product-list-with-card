import React from 'react'

const Product = ({ product }) => {

  return (
    <div className='product'>
      <img src={product.image.desktop} alt={product.category} />
      <span>{product.category}</span>
      <strong>{product.name}</strong>
      <span>${product.price}</span>
    </div>
  )
}

export default Product