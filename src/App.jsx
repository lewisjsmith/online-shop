import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import Cart from './components/Cart'
import StorePage from './components/StorePage'
import Home from './components/Home'

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => { }
});

function App() {

  const [cartItems, setCartItems] = useState([]);
  const addToCart = () => {
    return;
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
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
    </CartContext.Provider>
  )
}

export default App
