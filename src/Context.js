import React, { useState, useEffect } from 'react'
import data from './data/drinks'
const ThemeContext = React.createContext();

function Provider(props) {
    const [page, setPage] = useState(1)
    const [display, setDisplay] = useState([])
    const [drinks, setDrinks] = useState(data)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const cloneDrinks = [...drinks]

    const updateTracker = (value, data) => {
        const index = cloneDrinks.findIndex(item => item.id === data.id)
        const item = cloneDrinks[index]
        item.tracked = value;
        setDrinks(cloneDrinks)
    }

    useEffect(() => {
        const updateTotal = cart.map(item => item.price * item.quantity).reduce((acc, num) => acc + num, 0)
        setTotal(updateTotal)
    }, [cart])

    useEffect(() => {
        const start = (page - 1) * 12
        const end = start + 12
        const final = drinks.slice(start, end)
        setDisplay(final)
    }, [page, drinks])

    return (
        <ThemeContext.Provider value={{page, setPage, cart, setCart, display, drinks, setDrinks, total, updateTracker}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, Provider }