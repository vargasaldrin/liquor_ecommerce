import React from 'react'
import { Banner, Infobar, Section } from '../components'

export default function Home(props) {

    return (
        <div id="home">
            <Banner text="Good Drink for Good Moments." />
            <Infobar />
            <Section />
        </div>
    )
}