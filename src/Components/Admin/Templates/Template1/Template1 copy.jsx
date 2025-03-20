import React from 'react';
import { MapPin, Mail, Globe, Phone, Share2, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import "./Template1.css";
import face from "../../../../assets/images/Frame 33.png"
import wat from "../../../../assets/images/Frame 34.png"
import ins from "../../../../assets/images/Frame 34(1).png"
import you from "../../../../assets/images/Frame 35.png"
import logo from "../../../../assets/images/logo-bright-text 2.png"
import con from "../../../../assets/images/Frame 38.png"
import mail from "../../../../assets/images/Frame 38(1).png"
import glob from "../../../../assets/images/Frame 39.png"
import phone from "../../../../assets/images/Frame 39(1).png"
import share from "../../../../assets/images/share-08.png"
import down from "../../../../assets/images/download-04.svg"
import qr from "../../../../assets/images/qr-code.png"
import map from "../../../../assets/images/Frame 2147224949.png"

const Template1 = () => {
    
    return (
        <div className="contact-page-container">
        
            <div className="header-section">
                <div className="profile-content">
                    <div className="profile-info">
                        <div className='common'>
                            <h2 className="profile-name">Abdul Rasheed</h2>
                            <p className="profile-title">Founder</p>
                        </div>
                    </div>
                </div>

         
                <div className="social-buttons">
                    <div className="social-button">
                        <img src={face} alt="" />
                    </div>
                    <div className="social-button">
                        <div className="whatsapp-icon">
                            <img src={wat} alt="" />
                        </div>
                    </div>
                    <div className="social-button">
                        <img src={ins} alt="" />
                    </div>
                    <div className="social-button">
                        <img src={you} alt="" />
                    </div>
                </div>
            </div>

 
            <div className="company-logo-section">
                <div className="logo-container">

                    <img src={logo} alt="" className='logooo' />

                </div>
            </div>

      
            <div className="contact-info-section">
                <div className='contact-get'>
                    <h2 className='text-hoz'>Hoztox Technologies</h2>

                    <div className="contact-info-item">

                        <img src={con} alt="" />
                        <p className="contact-text">
                            3rd Floor, Al Reem Mall, Calicut Road, Valanchery, Kerala 676 552
                        </p>
                    </div>
                    <div className="contact-info-item">
                        <img src={mail} alt="" />
                        <p className="contact-text">hoztextechnologies@gmail.com</p>
                    </div>
                    <div className="contact-info-item">
                        <img src={glob} alt="" />
                        <p className="contact-text">https://hoztox.com/</p>
                    </div>
                    <div className="contact-info-item">
                        <img src={phone} alt="" />
                        <p className="contact-text">+91 9539546459</p>
                    </div>
                    <div className="button-group">
                        <button className="action-btn-share">
                            <img src={share} alt="" />
                            Share
                        </button>
                        <button className="action-btn-down">
                            <img src={down} alt="" />
                            Save Contact
                        </button>
                        <button className="action-btn-qr">
                            <img src={qr} alt="" />
                            Start
                        </button>
                    </div>
                </div>

            </div>

         


           
            <div className="form-section">
                <div className="get-in">
                    <h2 className="get-title">Get In Touch</h2>

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Mobile</label>
                        <input
                            type="text"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <input
                            className="form-textarea"
                            rows="4"
                        ></input>
                    </div>

                    <button className="submit-button">
                        Send
                    </button>
                </div>
            </div>

    
            <div className="map-section">
                <div className="get-in">
                    <h2 className="map-title">Map</h2>
                    <div className="map-container">
                 
                        <img src={map} alt="Location Map" className="map-image" />
                    </div>
                </div>
            </div>

          
            <div className="footer">
                <div className='foot'>
                    copyright @ 2022 - 2025 Hoztox
                </div>
            </div>
        </div>
    );
};

export default Template1;