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
    setSelectedProducts([...selectedProducts, {product, quantity}])
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
      />
    </div>
  );
}

export default App;
