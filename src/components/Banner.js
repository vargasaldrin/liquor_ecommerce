import React from 'react'
import './styles/banner.css'

export default function Banner(props) {

    const textArray = props.text.split(" ")
    const bannerWords = textArray.map((text, index) => {
        return <span key={index} className="banner_word">{text} </span>
    })

    return (
        <div className="banner" style={{height: props.height}}>
            <div className="overlay"></div>
            <div className="banner_text" style={{paddingTop: props.padding, paddingBottom: props.padding}}>{bannerWords}</div>
        </div>
    )
}