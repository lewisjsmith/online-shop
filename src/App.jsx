import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import productExamples from './productExamples';
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import Cart from './components/Cart'
import StorePage from './components/StorePage'
import Home from './components/Home'
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';

import "./fonts/Oxygen-Bold.ttf";

import './styles/App.css'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
  mobile: false
});

function App(props) {

  const [cartItems, setCartItems] = useState([]);
  const [windowQuery, setWindowQuery] = useState({
    matches: window.innerWidth > 600 ? true : false
  })

  useEffect(() => {
    let mq = window.matchMedia("(min-width: 600px)");
    mq.addEventListener("change", sizeCheck);
    return () => mq.removeEventListener("change", sizeCheck);
  }, []);

  function sizeCheck(obj) {
    const temp = obj.matches;
    setWindowQuery({ matches: temp })
  }

  const products = productExamples;

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

  const removeFromCart = (value, quantity, size) => {
    const vanillaList = [...cartItems];
    const updatedList = vanillaList.map(item => {

      if (item.value === value && item.size === size) {
        if (quantity >= item.quantity) {
          return "";
        } else {
          return { ...item, quantity: (item.quantity - quantity) };
        }
      } else {
        return { ...item }
      }
    }).filter(space => space !== "");

    setCartItems([...updatedList]);
  }



  return (

    <div className="app">
      <ShopContext.Provider value={{ products, cartItems, addToCart, removeFromCart, windowQuery }}>

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
            <Route path="product">
              {products.map(item => {
                return (
                  <Route key={item.value} path={`${item.value}`} element={<ProductPage />} />
                );
              })}
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>

      </ShopContext.Provider>
      <Footer />
    </div>
  )
}

export default App
