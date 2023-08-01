import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import productExamples from './productExamples';
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import Cart from './components/Cart'
import StorePage from './components/StorePage'
import Home from './components/Home'
import ProductPage from './components/ProductPage';

import './styles/App.css'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => { },
});

function App(props) {

  const [cartItems, setCartItems] = useState([]);
  const products = productExamples;

  // update for size
  const addToCart = (value, added, size) => {
    if (added > 0) {

      const itemsList = [...cartItems];
      let updated = false;

      const updatedList = [...itemsList.map(item => {
        if (item.value === value && item.size === size) {
          updated = true;
          return { ...item, quantity: item.quantity + added };
        } else {
          return { ...item }
        }
      })];

      if (updated) {
        setCartItems([...updatedList])
      } else {
        const price = products.filter(product => product.value === value)[0].price;
        setCartItems([...itemsList].concat([{ value: value, quantity: added, size: size, price: price }]));
      }
    }
  }

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
      <Routes>

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />

          <Route path="men" element={<StorePage />}>
            <Route path=":pathname" element={<StorePage />} />
          </Route>

          <Route path="women" element={<StorePage />}>
            <Route path=":pathname" element={<StorePage />} />
          </Route>

          <Route path="cart" element={<Cart />} />

          {products.map(item => {
            return (
              <Route key={item.value} exact={true} path={`/product/${item.value}`} element={<ProductPage location={props.location} />} />
            );
          })}

          <Route path="*" element={<ErrorPage />} />

        </Route>

      </Routes>
    </ShopContext.Provider>
  )
}

export default App
