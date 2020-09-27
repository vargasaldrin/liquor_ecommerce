import React from 'react'
import data from '../data/blogPosts'
import './styles/displayBlog.css'

export default function DisplayBlog(props) {

    const blogPosts = data.map((item, index) => (
        <div className="blog_card" key={index}>
            <img className="blog_image" src={item.image} alt="blog" />
            <div className="blog_info">
                <div className="blog_date">
                    <i className="fas fa-calendar-alt"></i> {item.date}
                </div>
                <div className="blog_title">{item.title}</div>
                <div className="blog_description">{item.description}</div>
                <div className="blog_continue">Continue <i className="fas fa-long-arrow-alt-right"></i></div>
            </div>
        </div>
    ))

    return (
        <div id="blog">
            <div className="container">
                <div className="blog_row">
                    {blogPosts}
                </div>
            </div>
        </div>
    )
}