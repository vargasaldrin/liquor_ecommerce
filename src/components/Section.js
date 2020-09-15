import React from 'react'
import './styles/section.css'

export default function Section(props) {

    return (
        <div id="section">
            <div className="container">
                <div className="section_one">
                        <img className="section_image" src="./images/about.jpg" alt="drinks"/>
                    <div className="section_description">
                        <div className="section_year">Since 1907</div>
                        <div className="section_title">Desire meets a new Taste</div>
                        <p className="section_paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br/><br/>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                        <div className="section_experience">115 Years of Experience In Business</div>
                    </div>
                </div>
                <div className="section_two">
                    <div className="section_drinks">
                        <img className="drinks" src="./images/kind-1.jpg" alt="brandy" />
                        <div className="drink_name">Brandy</div>
                    </div>
                    <div className="section_drinks">
                        <img className="drinks" src="./images/kind-2.jpg" alt="brandy" />
                        <div className="drink_name">Brandy</div>
                    </div>
                    <div className="section_drinks">
                        <img className="drinks" src="./images/kind-3.jpg" alt="brandy" />
                        <div className="drink_name">Brandy</div>
                    </div>
                    <div className="section_drinks">
                        <img className="drinks" src="./images/kind-4.jpg" alt="brandy" />
                        <div className="drink_name">Brandy</div>
                    </div>
                    <div className="section_drinks">
                        <img className="drinks" src="./images/kind-5.jpg" alt="brandy" />
                        <div className="drink_name">Brandy</div>
                    </div>
                    <div className="section_drinks">
                        <img className="drinks" src="./images/kind-6.jpg" alt="brandy" />
                        <div className="drink_name">Brandy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}