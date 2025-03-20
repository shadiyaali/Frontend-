import React from 'react';
import "./Template4.css";
import face from "../../../../assets/images/a.png"
import log from "../../../../assets/images/Frame 2147224970.png"
import wat from "../../../../assets/images/b.png"
import ins from "../../../../assets/images/c.png"
import you from "../../../../assets/images/d.png"
import logo from "../../../../assets/images/logo-bright-text 1(1).png"
import con from "../../../../assets/images/location-01.png"
import mail from "../../../../assets/images/mail-01.png"
import glob from "../../../../assets/images/connection_903482 1.png"
import phone from "../../../../assets/images/call.png"
import share from "../../../../assets/images/share-08-b.png"
import down from "../../../../assets/images/download-04-b.png"
import qr from "../../../../assets/images/qr-code-b.png"
import map from "../../../../assets/images/map2.png"

const Template4 = () => {
    return (
        <div className="temp-4-digital-card">
            <div className="temp-4-digital-card-header">
                <img src={log} alt="" className="img-logo" />
                </div>
                <div className="temp-4-profile-info-overlay">
                    <h2 className="temp-4-profile-name">Rose Alina</h2>
                    <p className="temp-4-profile-position">Founder</p>
                </div>
            

            <div className="temp-4-company-logo-second">
                <div className="temp-4-logo-container-second">
                    <img src={logo} alt="" className='temp-4-logooo-second' />
                </div>
            </div>
            <div className="temp-4-social-icons-second">
                <div className="temp-4-icon-circle facebook">
                    <img src={face} alt="" />
                </div>
                <div className="temp-4-icon-circle whatsapp">
                    <img src={wat} alt="" />
                </div>
                <div className="temp-4-icon-circle instagram">
                    <img src={ins} alt="" />
                </div>
                <div className="temp-4-icon-circle linkedin">
                    <img src={you} alt="" />
                </div>
            </div>

            <div className="temp-4-contact-info-section-second">
                <div className='temp-4-contact-get-second'>
                    <h2 className='temp-4-text-hoz-secondss'>Hoztox Technologies</h2>
                    <div className='temp-4-test'>
                        <div className="temp-4-contact-info-item-second">
                            <img src={con} alt="" />
                            <p className="temp-4-contact-text-second">
                                3rd Floor, Al Reem Mall, Calicut Road, Valanchery, Kerala 676 552
                            </p>
                        </div>
                        <div className="temp-4-contact-info-item-second">
                            <img src={mail} alt="" />
                            <p className="temp-4-contact-text-second">hoztextechnologies@gmail.com</p>
                        </div>
                        <div className="temp-4-contact-info-item-second">
                            <img src={glob} alt="" />
                            <p className="temp-4-contact-text-second">https://hoztox.com/</p>
                        </div>
                        <div className="temp-4-contact-info-item-second">
                            <img src={phone} alt="" />
                            <p className="temp-4-contact-text-second">+91 9539546459</p>
                        </div>
                    </div>
                    <div className="temp-4-button-group">
                        <button className="temp-4-action-btn-share">
                            <img src={share} alt="" className='white-filter' />
                            Share
                        </button>
                        <button className="temp-4-action-btn-down">
                            <img src={down} alt="" className='white-filter' />
                            Save Contact
                        </button>
                        <button className="temp-4-action-btn-qr">
                            <img src={qr} alt="" className='white-filter' />
                            Start
                        </button>
                    </div>
                </div>
            </div>

            <div className="temp-4-form-section">
                <div className="temp-4-get-in">
                    <h2 className="temp-4-get-title">Get In Touch</h2>
                    <div className="temp-4-form-group">
                        <label className="temp-4-form-label">Name</label>
                        <input type="text" className="temp-4-form-input" />
                    </div>
                    <div className="temp-4-form-group">
                        <label className="temp-4-form-label">Mobile</label>
                        <input type="text" className="temp-4-form-input" />
                    </div>
                    <div className="temp-4-form-group">
                        <label className="temp-4-form-label">Email</label>
                        <input type="email" className="temp-4-form-input" />
                    </div>
                    <div className="temp-4-form-group">
                        <label className="temp-4-form-label">Message</label>
                        <input className="temp-4-form-textarea" rows="4"></input>
                    </div>
                    <button className="temp-4-submit-button">Send</button>
                </div>
            </div>

            <div className="map-sectionss-tem">
                <div className="temp-4-get-in-map">
                    <h2 className="map-title-temp-4">Map</h2>
                    <div className="map-containerss-temp" style={{ borderRadius: '1px' }}>
                        <img src={map} alt="Location Map" className="map-images-temp-4" style={{ borderRadius: '1px' }} />
                    </div>
                </div>
            </div>

            <div className="footer-temp-4">
                <div className='foot-temp-4'>
                    copyright @ 2022 - 2025 Hoztox
                </div>
            </div>
        </div>
    );
};

export default Template4;