import React from 'react'
import { Banner, Infobar, Section, Testimony } from '../components'

export default function Home(props) {

    return (
        <div id="home">
            <Banner text="Good Drink for Good Moments." height="700px" padding="305px"/>
            <Infobar />
            <Section />
            <Testimony />
        </div>
    )
}