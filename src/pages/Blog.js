import React from 'react'
import { Banner, DisplayBlog } from '../components'

export default function Home(props) {

    return (
        <div id="home">
            <Banner text="Blog" height="350px" padding="130px" />
            <DisplayBlog />
        </div>
    )
}