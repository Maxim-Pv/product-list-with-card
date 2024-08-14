import React from 'react'

const Confirm = ({ 
    selectedProducts, setSelectedProducts, total, isOrderConfirmed, setIsOrderConfirmed 
  }) => {

  const handleConfirm = () => {
    setSelectedProducts([])
    setIsOrderConfirmed(false)
  }

  return (
    <div className={isOrderConfirmed ? 'confirm show' : 'confirm'} 
      onClick={() => setIsOrderConfirmed(false)}
    >
      <div className='confirm-container' onClick={(e) => e.stopPropagation()}>
        <div>
          <span className='check'></span>
          <h1 className='confirm-title'>Order Confirmed</h1>
          <p className='confirm-text'>We hope you enjoy your food!</p>
        </div>
        <ul className='confirm-items'>
          {selectedProducts.map((product) => (
            <li key={product.product.category} className='confirm-item'>
              <div className='confirm-item-info'>
                <img className='confirm-item-img' 
                  src={product.product.image.thumbnail} 
                  alt={product.product.category} 
                />
                <div className='confirm-item-info-text'>
                  <strong>{product.product.name}</strong>
                  <div>
                    <span className='quantityInCart'>{product.quantity}x</span>
                    <span className='price'>@ ${product.product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <strong>${(product.product.price * product.quantity).toFixed(2)}</strong>
            </li>
          ))}
          <li className='confirm-total'>
            <span>Order Total</span>
            <strong className='total-price'>${total.toFixed(2)}</strong>
          </li>
        </ul>
        <button className='confirm-btn' 
          onClick={handleConfirm}
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Confirm