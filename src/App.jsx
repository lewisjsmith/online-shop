import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import Cart from './components/Cart'
import StorePage from './components/StorePage'
import Home from './components/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="men" element={<StorePage />} />
          <Route path="women" element={<StorePage />} />
          <Route path="accessories" element={<StorePage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
