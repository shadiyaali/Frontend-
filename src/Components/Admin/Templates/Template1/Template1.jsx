import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Globe, Phone, Share2 } from 'lucide-react';
import "./Template1.css";
import face from "../../../../assets/images/Frame 33.png";
import wat from "../../../../assets/images/Frame 34.png";
import ins from "../../../../assets/images/Frame 34(1).png";
import you from "../../../../assets/images/Frame 35.png";
import logo from "../../../../assets/images/logo-bright-text 2.png";
import con from "../../../../assets/images/Frame 38.png";
import mail from "../../../../assets/images/Frame 38(1).png";
import glob from "../../../../assets/images/Frame 39.png";
import phone from "../../../../assets/images/Frame 39(1).png";
import share from "../../../../assets/images/share-08.png";
import down from "../../../../assets/images/download-04.svg";
import qr from "../../../../assets/images/qr-code.png";
import map from "../../../../assets/images/Frame 2147224949.png";
import pro from "../../../../assets/images/Rasheed-12 1.png";

import { BASE_URL } from '../../../../Utils/config';


const Template1 = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {

        const storedData = localStorage.getItem("tempUserData");
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);
    useEffect(() => {
        console.log("User Data:", userData);
    }, [userData]);

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
        <div className="contact-page-container">
            <div className="header-section">
                {userData?.profile_image ? (
                    <img src={userData.profile_image} alt="Company Logo" className='profile-image' />
                ) : (
                    <img src={pro} alt="" />
                )}

                
                <div className="profile-content">
                    <div className="profile-info">
                        <div className='common'>
                            <h2 className="profile-name">{userData?.name || "User Name"}</h2>
                            <p className="profile-title">{userData?.company_name || "Company Name"}</p>
                        </div>
                    </div>
                </div>

                <div className="social-buttons">
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

            </div>
            <div className="company-logo-section">
                <div className="logo-container">
                    {userData?.logo ? (

                        <img src={userData.logo} alt="Company Logo" className='logooo-second' />
                    ) : (
                        <img src={logo} alt="Default Logo" className='logooo-second' />
                    )}
                </div>
            </div>





            <div className="contact-info-section">
                <div className='contact-get'>
                    <h2 className='text-hoz'>{userData?.company_name || "Company Name"}</h2>

                    <div className="contact-info-item">
                        <img src={con} alt="" />
                        <p className="contact-text">{userData?.address || "Company Address"}</p>
                    </div>
                    <div className="contact-info-item">
                        <img src={mail} alt="" />
                        <p className="contact-text">{userData?.email || "Company Email"}</p>
                    </div>
                    <div className="contact-info-item">
                        <img src={glob} alt="" />
                        <p className="contact-text">{userData?.website || "Company Website"}</p>
                    </div>
                    <div className="contact-info-item">
                        <img src={phone} alt="" />
                        <p className="contact-text">{userData?.contact_number || "Company Contact"}</p>
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

            <div className="footer">
                <div className='foot'>copyright @ 2022 - 2025 Hoztox</div>
            </div>
        </div>
    );
};

export default Template1;
