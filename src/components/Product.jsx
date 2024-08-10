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
              <button className='decrease' onClick={handleDecrease}></button>
              <span className='quantity'>{quantity}</span>
              <button className='increase' onClick={handleIncrease}></button>
            </div>
            )
          : (
            <button className='add-to-cart' onClick={() => setIsAdded(true)}>
              <span className='cart-img'></span>
              Add to Cart
            </button>
            )
        }
      </div>
      <span>{product.category}</span>
      <strong>{product.name}</strong>
      <span>${productPrice}</span>
    </div>
  )
}

export default Product