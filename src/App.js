import { useEffect, useState } from 'react';
import data from './data.json';
import Product from './components/Product';
import Cart from './components/Cart';
import Confirm from './components/Confirm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  useEffect(() => {
    setProducts(data);
  },[])

  const handleAddToCart = (product, quantity) => {
    const existingProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.product.category === product.category
    )
    if (existingProduct) {
      existingProduct.quantity += quantity
      setSelectedProducts([...selectedProducts])
      return
    }
    
    setSelectedProducts([...selectedProducts, {product, quantity}])
  }

  const handleRemoveFromCart = (product) => {
    setSelectedProducts(selectedProducts.filter(
      (selectedProduct) => selectedProduct.product.category !== product.product.category)
    )
  }

  const handleTotal = () => {
    return selectedProducts.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
  }


  return (
    <div className="App">
      {isOrderConfirmed && 
        <Confirm 
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          total={handleTotal && handleTotal()}
          isOrderConfirmed={isOrderConfirmed}
          setIsOrderConfirmed={setIsOrderConfirmed}
      />}
      <div>
        <h1 className='heading'>Desserts</h1>
        <div className='products'>
          {products && products.map((product) => 
            <Product 
              key={product.category} 
              product={product} 
              handleAddToCart={handleAddToCart}
              selectedProducts={selectedProducts}
            />
          )}
        </div>
      </div>
      <Cart 
        selectedProducts={selectedProducts}
        handleRemove={handleRemoveFromCart}
        total={handleTotal && handleTotal()}
        setIsOrderConfirmed={setIsOrderConfirmed}
      />
    </div>
  );
}

export default App;
