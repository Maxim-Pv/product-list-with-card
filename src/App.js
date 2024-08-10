import { useEffect, useState } from 'react';
import data from './data.json';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

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

  return (
    <div className="App">
      <div>
        <h1 className='title'>Desserts</h1>
        <div className='products'>
          {products && products.map((product) => 
            <Product 
              key={product.category} 
              product={product} 
              handleAddToCart={handleAddToCart}
            />
          )}
        </div>
      </div>
      <Cart 
        selectedProducts={selectedProducts}
        handleRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
