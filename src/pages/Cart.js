import React from 'react'
import { Banner, DisplayCart } from '../components'

export default function Cart(props) {

    return (
        <div id="home">
            <Banner text="Cart" height="350px" padding="130px" />
            <DisplayCart />
        </div>
    )
}