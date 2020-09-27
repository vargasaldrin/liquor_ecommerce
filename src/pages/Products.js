import React from 'react'
import { Banner, DisplayProduct } from '../components'

export default function Products(props) {

    return (
        <div id="home">
            <Banner text="Products" height="350px" padding="130px" />
            <DisplayProduct />
        </div>
    )
}