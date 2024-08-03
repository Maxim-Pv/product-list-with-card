import { useEffect, useState } from 'react';
import data from './data.json';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  },[])

  return (
    <div className="App">
      <div>
        <h1 className='title'>Desserts</h1>
        <div className='products'>
          {products && products.map((product) => 
            <Product 
              key={product.category} 
              product={product} 
            />
          )}
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default App;
