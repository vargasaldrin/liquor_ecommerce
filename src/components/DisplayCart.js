import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
import CartItem from './CartItem'
import './styles/displayCart.css'

export default function DisplayCart(props) {
    const { cart, total } = useContext(ThemeContext)

    const cartList = cart.map(item => (
        <CartItem data={item} key={item.id}/>
    ))

    const checkoutBox = (
        <div className="cart_checkout">
            <div className="cart_final">
                <div className="final_title">Cart Total:</div>
                <div className="final_subText">
                    <div>Subtotal</div>
                    <div>${total}</div>
                </div>
                <div className="final_subText">
                    <div>Deliver</div>
                    <div>$15</div>
                </div>
                <div className="final_subText">
                    <div>Discount</div>
                    <div>$0</div>
                </div>
                <div className="final_subText">
                    <div className="final_total">TOTAL</div>
                    <div className="final_total">${total - 15}</div>
                </div>
            </div>
            <button className="checkout_button">Proceed to Checkout</button>
        </div>
    )

    const empty = <div className="empty"><span role="img" aria-label="sad face">Your cart is empty 😔</span></div>

    return ( 
        <div id="cart">
            <div className="container">
                <div className="cart_grid cart_header">
                    <div className="cart_title"></div>
                    <div className="cart_titleProduct">Product</div>
                    <div className="cart_title">Price</div>
                    <div className="cart_title">Quantity</div>
                    <div className="cart_title">Total</div>
                    <div className="cart_title"></div>
                </div>
                {cart.length === 0 ? empty : cartList}
                {cart.length === 0 ? null : checkoutBox}
            </div>
        </div>
    )
}