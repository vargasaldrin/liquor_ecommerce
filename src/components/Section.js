import React from 'react'
import './styles/section.css'
import data from '../data/drinkTypes'

export default function Section(props) {

    const drinkTypes = data.map((type, index) => (
        <div className="section_drinks" key={index}>
            <img className="drinks" src={type.image} alt={type.name} />
            <div className="drinks_name">{type.name}</div>
        </div>
    ))

    return (
        <div id="section">
            <div className="container">
                <div className="section_one">
                        <img className="section_image" src="./images/about.jpg" alt="drinks"/>
                    <div className="section_description">
                        <div className="section_year">Since 1907</div>
                        <div className="section_title">Desire Meets a New Taste</div>
                        <p className="section_paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br/><br/>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                        <div className="section_experience"><span style={{color: "#b7472a"}}>115</span> Years of Experience In Business</div>
                    </div>
                </div>
                <div className="section_two">
                    {drinkTypes}
                </div>
            </div>
        </div>
    )
}