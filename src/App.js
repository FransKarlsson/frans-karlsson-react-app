
import './style.scss'
import {useState, useEffect} from 'react'
import icon from './img/icon.png'

function App() {
  
  
  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch("https://localhost:7110/Product")
    .then(response => response.json())
    .then(data => setproducts(data));
  },[])
  // console.log(products);
  
  
  return (
    <div className="App">

      
      <main>
        <div id="navbar">
            <div className="navbar-title">
                <div id="icon"><img src={icon}/></div>
                <h1 className="title">Gmarketplace™</h1>  
            </div>
  
            <div className="navbar-buttons">
                <button className="search">Search</button>
                <button className="cart">Cart</button>
            </div>

        </div>

        <div className="slider-container" id="featured">
            <div className="category-title">
              <h2>Featured products</h2>
            </div>
            <div className="product-items">
              {
                products.map(product => 
                <div className="product">
                  <div className='product-title'>{product.title}</div>
                  <div className='image'></div>
                  <div className='rating'></div>
                </div>
                )
              }

            </div>
        </div>


    </main>
      
    </div>
  )
  
}

export default App;
