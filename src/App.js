import { useEffect, useState } from 'react';
import data from './data.json';
import './App.css';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  },[])

  return (
    <div className="App">
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
  );
}

export default App;
