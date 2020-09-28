import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../Context'
import './styles/cartItem.css'

export default function CartItem(props) {
    const cartItem = {...props.data}
    const [quantity, setQuantity] = useState(1)
    const [finalPrice, setFinalPrice] = useState(cartItem.price)
    const {cart, setCart, updateTracker} = useContext(ThemeContext)
    const cloneCart = [...cart]
    const price = cartItem.price
    
    const handleChange = (e) => {
        let { value } = e.target
        if(value.length <= 3) {
            return setQuantity(value)
        }
    }

    const handleBlur = (e) => {
        let { value } = e.target
        if (!value) {
            value = 1
        }
        const index = cloneCart.findIndex(item => item.id === cartItem.id)
        const item = cloneCart[index]
        const parsedVal = parseInt(value)
        item.quantity = parsedVal
        setCart(cloneCart)
        return setQuantity(value)
    }

    const handleClick = (e) => {
        const newCart = cart.filter(data => cartItem.id !== data.id)
        updateTracker(false, cartItem)
        setCart(newCart)
    }

    useEffect(() => {
        const calculated = price * quantity
        setFinalPrice(calculated)
    }, [quantity, price])

    return (
        <div className="cart_grid cart_item" >
            <div className="cart_image">
                <img src={cartItem.image} alt={cartItem.type} />
            </div>
            <div className="cart_name">{cartItem.name}</div>
            <div className="cart_price">${cartItem.price}</div>
            <div className="cart_quantity">
                <input type="number" value={quantity} onChange={handleChange} onBlur={handleBlur} min="1" max="100"/>
            </div>
            <div className="cart_finalPrice">${finalPrice}</div>
            <div className="cart_cancel" onClick={handleClick}>
                <i className="fas fa-times" />
            </div>
        </div>
    )
}