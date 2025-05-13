import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Landinpage from './pages/Landinpage'
import Products from './pages/Products'
import Men from './components/Men'
import Singleprod from './singleproducts/Singleprod'
import Cart from './pages/Cart'

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Landinpage/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/single/:id' element={<Singleprod/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   
  
   
   
   </>
    
    
  )
}

export default App