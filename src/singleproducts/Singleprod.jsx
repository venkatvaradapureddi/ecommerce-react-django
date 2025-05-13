import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'
import { useCart } from '../createContext/Context'
function Singleprod() {
    const {id}= useParams()
    const [products,setProducts] = useState([])
    const {addToCart} = useCart()
    useEffect(()=>{
    
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const filtered = products.find(item=>item.id == id)
    if (!filtered) {
        return <h2 style={{ textAlign: 'center' }}>Loading...</h2>
      }

  return (
    <>
    <Navbar/>
    <div className='singlemaindiv'>
        <div className="singleimage">
            <img src={filtered.image} alt="" />
        </div>
        <div className="singlecontent">
            <h3>{filtered.title}</h3>
            <p>{filtered.description}</p>
            <h4>₹{filtered.price}</h4>
            <Button variant='contained' onClick={()=>{addToCart(filtered)}}>Add Cart</Button>
        </div>

    </div>
    </>
  )
}

export default Singleprod