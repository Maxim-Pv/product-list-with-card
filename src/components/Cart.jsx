import React from 'react'

const Cart = ({ selectedProducts, handleRemove }) => {

  const total = selectedProducts.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
  const sumProducts = selectedProducts.reduce((acc, curr) => acc + curr.quantity, 0)

  
  return (
    <div className='cart'>
      <h2 className='title cart-title'>Your Cart ({sumProducts})</h2>
      {selectedProducts.length !== 0
        ? (<div>
            <ul>
            {selectedProducts.map((product) => 
              <li className='cart-product' key={product.product.category} >
                <div className='cart-product-info'>
                  <strong>{product.product.name}</strong>
                  <div className='cart-product-quantity'>
                    <span className='quantityInCart'>{product.quantity}x</span>
                    <span className='price'>@ ${product.product.price.toFixed(2)}</span>
                    <strong className='price'>${(product.product.price * product.quantity).toFixed(2)}</strong>
                  </div>
                </div>
                <button className='remove-btn' onClick={() => handleRemove(product)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                  </svg>
                </button>
              </li>
            )}
          </ul>
          <div className='cart-total'>
            <span>Order Total</span>
            <strong className='total-price'>${total.toFixed(2)}</strong>
          </div>
          <div className='delivery-info'>
            <span className='carbon-neutral-img'></span>
            <p className='delivery-text'>This is a <strong>carbon-neutral</strong> delivery</p>
          </div>
          <button className='confirm-btn'>Confirm order</button>
        </div>)
        : (<>
            <span className='empty-cart-img'></span>
            <p className='cart-text'>Your added items will appear here</p>
        </>)
      }
      
    </div>
  )
}

export default Cart