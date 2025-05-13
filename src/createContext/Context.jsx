import { createContext,useState,useContext } from "react";
const cartContext = createContext()
const CartProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([])
    const addToCart = (item)=>{
        setCartItems([...cartItems,item])
    }
    const removeFromCart = (item)=>{
        setCartItems(cartItems.filter((prod)=>prod.id !== item.id))
    }
    return(
        <cartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider
export const useCart =()=>{
    return useContext(cartContext)
}