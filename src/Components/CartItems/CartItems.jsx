import React, { useContext } from 'react'
import "./CartItems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {

 const {all_products, CartItems, removeFromCart} = useContext(ShopContext)


  return (
    <div className='cart-items'>

        <div className='cartItem-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        

        {all_products.map((e) => {
            if(CartItems[e.id] > 0) {
                return (
<div className='cartItem-format'>
            <img src={e.image} alt='' className='cartIcon-product-icon' />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <p>{CartItems[e.id]}</p>
            <button className='cartItems-quantity'>{CartItems[e.id]}</button>
            <p>{e.new_price*CartItems[e.id]}</p>
            <button  onClick={() => {removeFromCart(e.id)}}>
            <img src={remove_icon} alt=''/>

            </button>
        </div>
                )
                    
                
            }
            else {
                return null;
            }
        })}
      
    </div>
  )
}

export default CartItems
