import React,  { useState } from 'react'
import data from '../data/contactData'
import './styles/displayContact.css'

export default function DisplayProduct(props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const {value, name} = e.target
        return setForm({
            ...form,
            [name]: [value]
        })
    }

    const contactData = data.map((item, index) => (
        <div className="contact_tile" key={index}>
            <div className="contact_icon">
                <i className={item.icon}></i>
            </div>
            <div className="contact_text">
                <span className="contact_bold">{item.title}: </span>
                <span className="contact_normal">{item.text}</span>
            </div>
        </div>
    ))

    return (
        <div id="contact">
            <div className="container">
                <div className="contact_info">
                    {contactData}
                </div>
                <div className="contact_card">
                    <img className="contact_image" src="./images/bg_4.jpg" alt="wines"></img>
                    <form className="contact_form" onSubmit={handleSubmit}>
                        <h2>Contact Us</h2><br />
                        <div className="name_email">
                            <div className="contact_detail">
                                <div className="contact_title">NAME</div>
                                <input className="no_outline" type="text" name="name" value={form.name} placeholder="Name" onChange={handleChange} required></input>
                            </div>
                            <div className="contact_detail">
                                <div className="contact_title">EMAIL ADDRESS</div>
                                <input className="no_outline" type="email" name="email" value={form.address} placeholder="Email" onChange={handleChange} required></input>
                            </div>
                        </div>
                        <div className="contact_detail">
                            <div className="contact_title">SUBJECT</div>
                            <input className="no_outline" type="text" name="subject" value={form.subject} placeholder="Subject" onChange={handleChange} required></input>
                        </div>
                        <div className="contact_message">
                            <div className="contact_title">MESSAGE</div>
                            <textarea className="contact_textarea" type="text" name="message" value={form.message} placeholder="Message here" onChange={handleChange} required></textarea>
                        </div>
                        <button className="contact_button" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}