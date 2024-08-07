import React from 'react'

const Cart = ({ selectedProducts }) => {

  const total = selectedProducts.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
  const sumProducts = selectedProducts.reduce((acc, curr) => acc + curr.quantity, 0)
  
  return (
    <div className='cart'>
      <h2 className='title cart-title'>Your Cart ({sumProducts})</h2>
      {selectedProducts.length !== 0
        ? (<div>
            <ul>
            {selectedProducts.map((product) => 
              <li key={product.product.category} >
                <div>
                  <p>{product.product.name}</p>
                  <div>
                    <span>{product.quantity}x</span>
                    <span className='price'>@ ${product.product.price}</span>
                    <span className='price'>${product.product.price * product.quantity}</span>
                  </div>
                </div>
                <button>Remove</button>
              </li>
            )}
          </ul>
          <p className='cart-total'>Order Total: ${total}</p>
          <div className='delivery-info'>
            <span className='carbon-neutral-img'></span>
            <p>This is a <strong>carbon-neutral</strong> delivery</p>
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