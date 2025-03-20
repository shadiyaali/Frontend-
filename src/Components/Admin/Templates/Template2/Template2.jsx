import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Globe, Phone, Share2, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import "./Template2.css";
import face from "../../../../assets/images/Frame 33-b.png";
import wat from "../../../../assets/images/Frame 34-b.png";
import ins from "../../../../assets/images/Frame 34(1)-b.png";
import you from "../../../../assets/images/Frame 35-b.png";
import logo from "../../../../assets/images/logo-bright-text 2.png";
import con from "../../../../assets/images/location-01.png";
import mail from "../../../../assets/images/mail-01.png";
import glob from "../../../../assets/images/connection_903482 1.png";
import phone from "../../../../assets/images/call.png";
import share from "../../../../assets/images/share-08-b.png";
import down from "../../../../assets/images/download-04-b.png";
import qr from "../../../../assets/images/qr-code-b.png";
import map from "../../../../assets/images/Frame 2147224949.png";
import pro from "../../../../assets/images/Rasheed-12 1.png";

const Template2 = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("tempUserData");
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);

    const extractCoordinates = (mapUrl) => {
        try {

            const regex = /@([-\d.]+),([-\d.]+)/;
            const match = mapUrl.match(regex);
            if (match && match.length >= 3) {
                return `${match[1]},${match[2]}`;
            }


            return userData?.address || '';
        } catch (error) {
            return userData?.address || '';
        }
    }
    return (
        <div className="card-container">
            {/* Header Section */}
            <div className="card-header">
                <div className="header-background">
                    <div className="profile-picture">
                        {userData?.profile_image ? (
                            <img src={userData.profile_image} alt="Company Logo" className='profile-picture' />
                        ) : (
                            <img src={pro} alt="" className='profile-picture'/>
                        )}
                    </div>
                </div>
            </div>
            <div className="header-overlay">
                <h2 className="profile-name-second">{userData?.name || "Abdul Rasheed"}</h2>
                <p className="profile-title-second">{userData?.title || "Founder"}</p>
            </div>

            <div className="company-logo-second">
                <div className="logo-container-second">
                    {userData?.logo ? (
                        <img src={userData.logo} alt="Company Logo" className='logooo-second' />
                    ) : (
                        <img src={logo} alt="Default Logo" className='logooo-second' />
                    )}
                </div>
            </div>



            <div className="social-icons-second">
                {userData?.social_media_links?.map((link, index) => {
                    let socialIcon;

                    if (link.includes("facebook.com")) {
                        socialIcon = face;
                    } else if (link.includes("instagram.com")) {
                        socialIcon = ins;
                    } else if (link.includes("whatsapp.com")) {
                        socialIcon = wat;
                    } else if (link.includes("youtube.com")) {
                        socialIcon = you;
                    } else {
                        socialIcon = share;
                    }

                    return (
                        <div key={index} className="social-button">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={socialIcon} alt="Social" />
                            </a>
                        </div>
                    );
                })}
            </div>

            {/* Company Information */}
            <div className="contact-info-section-second">
                <div className='contact-get-second'>
                    <h2 className='text-hoz-second'>{userData?.company_name || "Company Name"}</h2>
                    <div className='test'>
                        <div className="contact-info-item-second">
                            <img src={con} alt="" />
                            <p className="contact-text-second">
                                {userData?.address || "Comapny Address"}
                            </p>
                        </div>
                        <div className="contact-info-item-second">
                            <img src={mail} alt="" />
                            <p className="contact-text-second">{userData?.email || "Email"}</p>
                        </div>
                        <div className="contact-info-item-second">
                            <img src={glob} alt="" />
                            <p className="contact-text-second">{userData?.website || "Website"}</p>
                        </div>
                        <div className="contact-info-item-second">
                            <img src={phone} alt="" />
                            <p className="contact-text-second">{userData?.contact_number || "Conatct number"}</p>
                        </div>
                    </div>
                    <div className="button-group-second">
                        <button className="action-btn-share-second">
                            <img src={share} alt="" />
                            Share
                        </button>
                        <button className="action-btn-down-second">
                            <img src={down} alt="" />
                            Save Contact
                        </button>
                        <button className="action-btn-qr-second">
                            <img src={qr} alt="" />
                            Start
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="form-section">
                <div className="get-in-second">
                    <h2 className="get-title-second">Get In Touch</h2>

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

            {/* Map Section */}
            <div className="map-section">
                <div className="get-in-second">
                    <h2 className="map-title">Map</h2>
                    <div className="map-container">
                        {userData?.location_map ? (
                            <iframe
                                src={`https://maps.google.com/maps?q=${extractCoordinates(userData.location_map)}&output=embed`}
                                title="Location Map"
                                className="map-image"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img src={map} alt="Default Map" className="map-image" />
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className='foot'>
                    copyright @ 2022 - 2025 Hoztox
                </div>
            </div>
        </div>
    );
};

export default Template2;