import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import productExamples from './productExamples';
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import Cart from './components/Cart'
import StorePage from './components/StorePage'
import Home from './components/Home'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => { }
});

function App() {

  const [cartItems, setCartItems] = useState([]);
  const products = productExamples;

  const addToCart = (id, added) => {
    if (added > 0) {

      const itemsList = [...cartItems];
      let updated = false;

      const updatedList = [...itemsList.map(item => {
        if(item.id === id) {
          updated = true;
          return {...item, quantity: item.quantity+added};
        } else {
          return {...item}
        }
      })];

      if (updated) {
        setCartItems([...updatedList])
      } else {
        setCartItems([...itemsList].concat([{ id: id, quantity: added }]));
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
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ShopContext.Provider>
  )
}

export default App
