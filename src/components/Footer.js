import React from 'react'
import './styles/footer.css'

export default function Footer(props) {


    const accountList =  ["My Account", "Register", "Log In", "My Order"]
    const informationList = ["About us", "Catalog", "Contact Us", "Terms & Conditions"]
    const quickList = ["New User", "Help Center", "Report Spam", "Faq's"]

    function makeList(list) {
        return list.map((item, index) => (
            <div className="footer_itemlist" key={index}>
                <i className="fas fa-chevron-right"></i>
                <span>{item}</span>
            </div>
        ))
    }

    const account = makeList(accountList)
    const information = makeList(informationList)
    const quick = makeList(quickList)

    return (
        <div id="footer">
            <div className="container">
                <div className="footer_row">
                    <div className="footer_liquor">
                        <div className="footer_header">LIQUOR STORE</div>
                        <p className="footer_paragraph">Lorem ipsum keme keme keme 48 years fayatollah kumenis emena gushung lulu bokot katagalugan at bakit shogal shogal bongga chaka wiz</p>
                        <div className="footer_social">
                            <div className="icon_social">
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className="icon_social">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className="icon_social">
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="footer_about">
                        <div className="footer_header">My Accounts</div>
                        {account}
                    </div>
                    <div className="footer_information">
                        <div className="footer_header">Information</div>
                        {information}
                    </div>
                    <div className="footer_quick">
                        <div className="footer_header">Quick Links</div>
                        {quick}
                    </div>
                    <div className="footer_question">
                        <div className="footer_header">Have a Question</div>
                        <div className="footer_address">
                            <i className="fas fa-map-marked qicon"></i>
                            <span> 123 Way Drive, BF Homes, Las Piñas City, Philippines</span>
                        </div>
                        <div className="footer_cellphone">
                            <i className="fas fa-mobile-alt qicon"></i>
                            <span>+63 901 234 5678</span>
                        </div>
                        <div className="footer_email">
                            <i className="fas fa-envelope qicon"></i>
                            <span>sample@email.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}