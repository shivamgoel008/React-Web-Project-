import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../Utlis/store";
import { clearCart } from "../Utlis/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return (
        <React.Fragment>
            <h1>Cart Items</h1>
            <button onClick={handleClearCart}>Clear Cart</button>
            {
            cartItems.map((item)=>(
                <h3>{item.name}</h3>
            ))
        }
        </React.Fragment>
    )
}
export default Cart;