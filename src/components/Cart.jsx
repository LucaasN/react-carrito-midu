import { useId, useEffect } from 'react'
import { CartIcon, ClearCartIcon } from './Icon.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js';
import { CartItem } from './CartItem.jsx';

export const Cart = () => {

    const cartCheckboxId = useId();
    const {cart, clearCart, addToCart} = useCart();

  return (
    <>
        <label htmlFor={cartCheckboxId} className='cart-button'>
            <CartIcon/>
        </label>
        <input type="checkbox" hidden id={cartCheckboxId} />

        <aside className='cart'>
            <ul>
                {
                    cart.map(item =>(
                        <CartItem 
                            key={item.id} 
                            {...item}
                            addToCart = {()=>{addToCart(item)}}
                        />
                    ))
                }
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon></ClearCartIcon>
            </button>
        </aside>
    </>
  )
}
