import React, { useState, useContext } from 'react'
import { ThemeContext } from '../Context'

export default function Box(props) {
    const cartItem = {...props.data}
    const [include, setInclude] = useState(cartItem.tracked)
    const { cart, setCart, updateTracker } = useContext(ThemeContext)

    const handleClick = () => {
        if(include) {
            const newCart = cart.filter(item => item.id !== props.data.id) 
            setCart(newCart)
            setInclude(false)
            updateTracker(false, cartItem)
        } else {
            const itemUpdate = {
                ...props.data,
                quantity: 1
            }
            const newCart = [...cart, itemUpdate]
            setCart(newCart)
            setInclude(true)
            updateTracker(true, cartItem)
        }
    }
    return (
        <div className="drink_cart" onClick={handleClick} style={{backgroundColor: include ? "#b64629" : "transparent" }}>
            {include ? <i className="fas fa-shopping-cart"></i> : <i className="fas fa-cart-plus"></i>}
        </div>
    )
}