import React from 'react'
import { useCart } from '../createContext/Context'
import { Button } from '@mui/material'
import Navbar from '../components/Navbar'

function Cart() {
    const {cartItems,removeFromCart} = useCart()
    const Total = cartItems.reduce((add,item)=> add+item.price,0)
  return (
    <>
    <Navbar/>
    <div className='mainCart'>
        {cartItems.length === 0 ? (
            <h2 style={{textAlign:'center',paddingTop:50}}>Your cart is empty 🛒</h2>
        ):(
            cartItems.map((item)=>(
                <div className="cartCard" key={item.id}>
                    <div className="imageCart">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="imageInfo">
                        <h3>{item.title}</h3>
                        <p>Price: ₹{item.price}</p>
                        <Button color='error'variant='contained'onClick={() => removeFromCart(item)} sx={{width:100}}>Remove</Button>
                    </div>
                </div>
            ))
        )}
    

    </div>
    {cartItems.length>0 && (
        <div className="totalprice">
            <h3>Total Price is <span style={{color:'blue'}}>₹{Total.toFixed(2)}</span></h3>
        </div>
    )}
    
    </>
  )
}

export default Cart