import React, { useState } from 'react'
import data from '../data/testimonies'
import './styles/testimony.css'

export default function Testimony(props) {
    const [counter, setCounter] = useState(0)

    const radioArray = [0, 1, 2, 3, 4]

    const testimony = data.map(testimonial => (
        <div className="testimony_sample" key={testimonial._id} >
            <div className="quote_logo">
                <i className="fas fa-quote-left"></i>
            </div>
            <div className="testimony_comment">{testimonial.comment}</div>
            <div className="testimony_identity">
                <img className="testimony_image" src={testimonial.image} alt={testimonial.name}/>
                <div className="testimony_text">
                    <div className="testimony_name">{testimonial.name}</div>
                    <div className="testimony_job">{testimonial.job}</div>
                </div>
            </div>
        </div>
    ))

    const radioDisplay = radioArray.map(item => (
        <button className="nav_button" key={item} onClick={() => setCounter(item)} style={{backgroundColor: item === counter ? " #b64629" : "transparent"}} />
    ))

    return (
        <div id="testimony">
            <div className="overlay_two"></div>
            <div className="container">
                <div className="testimony_align">
                    <div className="testimony_header">
                        Testimonials from our Happy Clients
                    </div>
                    <div className="testimony_carousel">
                        <div className="testimony_slider" style={{transform: `translateX(-${counter * 390}px)`}}>
                            {testimony}
                        </div>
                    </div>
                    <div className="testimony_navigation">
                        {radioDisplay}
                    </div>
                </div>
            </div>
        </div>
    )
}