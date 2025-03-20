import React from 'react';
import "./Template5.css";
import face from "../../../../assets/images/a.png"
import log from "../../../../assets/images/Frame 2147224970.png"
import wat from "../../../../assets/images/b.png"
import ins from "../../../../assets/images/c.png"
import you from "../../../../assets/images/d.png"
import logo from "../../../../assets/images/log-cut.png"
import con from "../../../../assets/images/location-01.png"
import mail from "../../../../assets/images/mail-01.png"
import glob from "../../../../assets/images/connection_903482 1.png"
import phone from "../../../../assets/images/call.png"
import share from "../../../../assets/images/share-08-b.png"
import down from "../../../../assets/images/download-04-b.png"
import qr from "../../../../assets/images/qr-code-b.png"
import map from "../../../../assets/images/map2.png"
import logoo from "../../../../assets/images/Rectangle 8.png"

const Template5 = () => {
    return (
        <div className="temp-5-digital-card">
           <div className="temp-5-digital-card-header">
                <img src={logoo} alt="" className='logos-5'/>
                <div className="temp-5-profile-info-overlay">
                    <h2 className="temp-5-profile-name">Abdul Rasheed</h2>
                    <p className="temp-5-profile-position">Founder</p>
                </div>
            </div>


            <div className="temp-5-company-logo-second round">
                <div className="temp-5-logo-container-second">
                    <img src={logo} alt="" className='temp-5-logooo-second' />
                </div>
            </div>
            <div className="temp-5-social-icons-second">
                <div className="temp-5-icon-circle facebook">
                    <img src={face} alt="" />
                </div>
                <div className="temp-5-icon-circle whatsapp">
                    <img src={wat} alt="" />
                </div>
                <div className="temp-5-icon-circle instagram">
                    <img src={ins} alt="" />
                </div>
                <div className="temp-5-icon-circle linkedin">
                    <img src={you} alt="" />
                </div>
            </div>

            <div className="temp-5-contact-info-section-second">
                <div className='temp-5-contact-get-second'>
                    <h2 className='temp-5-text-hoz-secondss'>Hoztox Technologies</h2>
                    <div className='temp-5-test'>
                        <div className="temp-5-contact-info-item-second">
                            <img src={con} alt="" />
                            <p className="temp-5-contact-text-second">
                                3rd Floor, Al Reem Mall, Calicut Road, Valanchery, Kerala 676 552
                            </p>
                        </div>
                        <div className="temp-5-contact-info-item-second">
                            <img src={mail} alt="" />
                            <p className="temp-5-contact-text-second">hoztextechnologies@gmail.com</p>
                        </div>
                        <div className="temp-5-contact-info-item-second">
                            <img src={glob} alt="" />
                            <p className="temp-5-contact-text-second">https://hoztox.com/</p>
                        </div>
                        <div className="temp-5-contact-info-item-second">
                            <img src={phone} alt="" />
                            <p className="temp-5-contact-text-second">+91 9539546459</p>
                        </div>
                    </div>
                    <div className="temp-5-button-group">
                        <button className="temp-5-action-btn-share">
                            <img src={share} alt="" className='white-filter' />
                            Share
                        </button>
                        <button className="temp-5-action-btn-down">
                            <img src={down} alt="" className='white-filter' />
                            Save Contact
                        </button>
                        <button className="temp-5-action-btn-qr">
                            <img src={qr} alt="" className='white-filter' />
                            Start
                        </button>
                    </div>
                </div>
            </div>

            <div className="temp-5-form-section">
                <div className="temp-5-get-in">
                    <h2 className="temp-5-get-title">Get In Touch</h2>
                    <div className="temp-5-form-group">
                        <label className="temp-5-form-label">Name</label>
                        <input type="text" className="temp-5-form-input" />
                    </div>
                    <div className="temp-5-form-group">
                        <label className="temp-5-form-label">Mobile</label>
                        <input type="text" className="temp-5-form-input" />
                    </div>
                    <div className="temp-5-form-group">
                        <label className="temp-5-form-label">Email</label>
                        <input type="email" className="temp-5-form-input" />
                    </div>
                    <div className="temp-5-form-group">
                        <label className="temp-5-form-label">Message</label>
                        <input className="temp-5-form-textarea" rows="4"></input>
                    </div>
                    <button className="temp-5-submit-button">Send</button>
                </div>
            </div>

            <div className="map-sectionss-tem">
                <div className="temp-5-get-in-map">
                    <h2 className="map-title-temp-5">Map</h2>
                    <div className="map-containerss-temp" style={{ borderRadius: '1px' }}>
                        <img src={map} alt="Location Map" className="map-images-temp-5" style={{ borderRadius: '1px' }} />
                    </div>
                </div>
            </div>

            <div className="footer-temp-5">
                <div className='foot-temp-5'>
                    copyright @ 2022 - 2025 Hoztox
                </div>
            </div>
        </div>
    );
};

export default Template5;