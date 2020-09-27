import React from 'react'
import { Banner, DisplayContact } from '../components'

export default function Contact(props) {

    return (
        <div id="home">
            <Banner text="Contact" height="350px" padding="130px" />
            <DisplayContact />
        </div>
    )
}