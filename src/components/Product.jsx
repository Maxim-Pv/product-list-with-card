import React, { useState } from 'react'

const Product = ({ product, handleAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const handleAdd = () => {
    if (quantity > 0) {
      handleAddToCart(product, quantity)
      setIsAdded(false)
    } else {
      setIsAdded(false)
    }
  }

  const handleDecrease = (e) => {
    e.stopPropagation()
    if (quantity > 0) {
      setQuantity(quantity - 1)
    } else {
      setQuantity(0)
    }
  }

  const handleIncrease = (e) => {
    e.stopPropagation()
    if (quantity < 10) {
      setQuantity(quantity + 1)
    } else {
      setQuantity(10)
    }
  }

  const productPrice = product.price.toFixed(2)
  

  return (
    <div className='product'>
      <div className='product-img-container'>
        <img className='product-img' src={product.image.desktop} alt={product.category} />
        {isAdded 
          ? (
            <div className='add-to-cart added' onClick={handleAdd}>
              <button className='decrease' onClick={handleDecrease}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                  <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
                </svg>
              </button>
              <span className='quantity'>{quantity}</span>
              <button className='increase' onClick={handleIncrease}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                </svg>
              </button>
            </div>
            )
          : (
            <button className='add-to-cart' onClick={() => setIsAdded(true)}>
              <span className='cart-img'></span>
              <strong>Add to Cart</strong>
            </button>
            )
        }
      </div>
      <span className='category'>{product.category}</span>
      <strong>{product.name}</strong>
      <span className='product-price'>${productPrice}</span>
    </div>
  )
}

export default Product