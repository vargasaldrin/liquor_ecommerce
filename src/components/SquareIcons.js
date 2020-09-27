import React, { useState, useContext } from 'react'
import { ThemeContext } from '../Context'

export default function Box(props) {
    const [include, setInclude] = useState(props.trackItem.tracked)
    const { cart, setCart, drinks, setDrinks } = useContext(ThemeContext)

    const cloneDrinks = [...drinks]
    
    const updateTracker = (value) => {
        const index = cloneDrinks.findIndex(item => item.id === props.trackItem.id)
        const item = cloneDrinks[index]
        item.tracked = value;
        setDrinks(cloneDrinks)
    }

    const handleClick = () => {
        if(include) {
            const newCart = cart.filter(item => item.id !== props.trackItem.id) 
            setCart(newCart)
            setInclude(false)
            updateTracker(false)
        } else {
            const itemUpdate = {
                ...props.trackItem,
                quantity: 1
            }
            const newCart = [...cart, itemUpdate]
            setCart(newCart)
            setInclude(true)
            updateTracker(true)
        }
    }
    return (
        <div className="drink_cart" onClick={handleClick} style={{backgroundColor: include ? "#b64629" : "transparent" }}>
            {include ? <i className="fas fa-shopping-cart"></i> : <i className="fas fa-cart-plus"></i>}
        </div>
    )
}