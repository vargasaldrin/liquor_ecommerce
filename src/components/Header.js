import React from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <>
            <div className="header_info">
                <div className="container">
                    <div className="row">
                        <div className="info_one">
                            <div className="info_item"><i className="fas mar fa-phone"></i>+63 901 234 5678</div>
                            <div className="info_item"><i className="fas mar fa-envelope"></i>sample@email.com</div>
                        </div>
                        <div className="info_two">
                            <div className="info_item">
                                <i className="fab mar fa-facebook-f"></i>
                                <i className="fab mar fa-twitter"></i>
                                <i className="fab mar fa-instagram"></i>
                                <i className="fab mar fa-github"></i>
                            </div>
                            <div className="info_item">SIGN UP</div>
                            <div className="info_item">LOG IN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_nav">
                <div className="container">
                    <div className="row">
                        <div className="nav_title">LIQUOR <span style={{color:"#a23f25"}}>STORE</span></div>
                        <div className="nav_pages">
                            <Link to="/"><div className="page_link">HOME</div></Link>
                            <Link to="/products"><div className="page_link">PRODUCTS</div></Link>
                            <Link to="/blog"><div className="page_link">BLOG</div></Link>
                            <Link to="/contact"><div className="page_link">CONTACT</div></Link>
                            <Link to="/cart"><i className="fas mar fa-shopping-cart page_link"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}