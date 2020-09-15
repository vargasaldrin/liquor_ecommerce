import React from 'react';
import './styles/infobar.css'

export default function Infobar(props) {

    return (
        <div id="info_bar">
            <div className="container">
                <div className="row">
                    <div className="info_card">
                        <img className="info_image" src="./images/support.png" alt="support" />
                        <div className="info_text">
                        <h3 className="info_title">ONLINE SUPPORT 24/7</h3>
                            <div className="info_description">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
                        </div>
                    </div>
                    <div className="info_card">
                        <img className="info_image" src="./images/cashback.png" alt="support" />
                        <div className="info_text">
                        <h3 className="info_title">MONEY BACK GUARANTEE</h3>
                            <div className="info_description">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
                        </div>
                    </div>
                    <div className="info_card">
                        <img className="info_image" src="./images/free.png" alt="support" />
                        <div className="info_text">
                            <h3 className="info_title">FREE SHIPPING & RETURN</h3>
                            <div className="info_description">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}