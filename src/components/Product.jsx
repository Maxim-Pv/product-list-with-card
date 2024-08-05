import React, { useState } from 'react'

const Product = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const handleAdd = () => {

    setIsAdded(true)
  }

  return (
    <div className='product'>
      <div className='product-img-container'>
        <img className='product-img' src={product.image.desktop} alt={product.category} />
        {isAdded 
          ? (
            <button className='add-to-cart added'>
              <span className='decrease'></span>
              {quantity}
              <span className='increase'></span>
            </button>
            )
          : (
            <button className='add-to-cart' onClick={handleAdd}>
              <span className='cart-img'></span>
              Add to Cart
            </button>
            )
        }
      </div>
      <span>{product.category}</span>
      <strong>{product.name}</strong>
      <span>${product.price}</span>
    </div>
  )
}

export default Product