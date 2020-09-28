import React, { useContext } from 'react'
import './styles/displayProduct.css'
import {SquareIcons, Pagination} from './index'
import { ThemeContext } from '../Context'

export default function DisplayProduct(props) {
    const { display } = useContext(ThemeContext)

    const drinksList = display.map(item => (
        <div className="drink_card" key={item.id}>
            <div className="drink_window">
                <img className="drink_image" src={item.image} alt="card" />
                <div className="drink_overlay">
                    <SquareIcons icon="cart" data={item} />
                </div>
            </div>
            <div className="drink_type">{item.type}</div>
            <div className="drink_name">{item.name}</div>
            <div className="drink_price">${item.price}</div>
        </div>
    ))

    return (
        <div id="drinks">
            <div className="container">
                <div className="drink_row">
                    {drinksList}
                    <Pagination />
                </div>
            </div>
        </div>
    )
}