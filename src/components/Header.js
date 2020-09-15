import React from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <div id="header">
            <div className="header_info">
                <div className="container">
                    <div className="row">
                        <div className="info_one">
                            <div className="info_item"><i className="fas fa-phone"></i>+63 901 234 5678</div>
                            <div className="info_item"><i className="fas fa-envelope"></i>sample@someemail.com</div>
                        </div>
                        <div className="info_two">
                            <div className="info_item">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-github"></i>
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
                        <div className="nav_title">LIQUOR STORE</div>
                        <div className="nav_pages">
                            <Link to="/"><div className="page_link">Home</div></Link>
                            <Link to="/products"><div className="page_link">Products</div></Link>
                            <Link to="/blog"><div className="page_link">Blog</div></Link>
                            <Link to="/contact"><div className="page_link">Contact</div></Link>
                            <Link to="/cart"><i className="fas fa-shopping-cart page_link"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}