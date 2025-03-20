import React, { useEffect, useState } from 'react';
import "./Template3.css";
import face from "../../../../assets/images/F.png"
import wat from "../../../../assets/images/V.png"
import ins from "../../../../assets/images/S.png"
import you from "../../../../assets/images/W.png"
import logo from "../../../../assets/images/logo-bright-text 2.png"
import con from "../../../../assets/images/location-01.png"
import mail from "../../../../assets/images/mail-01.png"
import glob from "../../../../assets/images/connection_903482 1.png"
import phone from "../../../../assets/images/call.png"
import share from "../../../../assets/images/share-08-b.png"
import down from "../../../../assets/images/download-04-b.png"
import qr from "../../../../assets/images/qr-code-b.png"
import map from "../../../../assets/images/map2.png"
import pro from "../../../../assets/images/Rasheed-12 1.png";

const Template3 = () => {
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
        <div className="temp-3-digital-card">
      
            <div className="profile-2">
                {userData?.profile_image ? (
                    <img src={userData.profile_image} alt="Company Logo" className='temp-3-digital-card-header ' />
                ) : (
                    <img src={pro} alt="" />
                )}
                <div className="temp-3-profile-info-overlay">
                    <h2 className="temp-3-profile-name">{userData?.name || "Abdul Rasheed"}</h2>
                    <p className="temp-3-profile-position">{userData?.position || "Founder"}</p>
                </div>
            </div>

            <div className="temp-3-company-logo-second">
                <div className="temp-3-logo-container-second">
                    {userData?.logo ? (
                        <img src={userData.logo} alt="Company Logo" className='temp-3-logooo-second' />
                    ) : (
                        <img src={logo} alt="Default Logo" className='temp-3-logooo-second' />
                    )}
                </div>
            </div>

            <div className="temp-3-social-icons-second">
                {userData?.social_media_links?.map((link, index) => {
                    let socialIcon;

                    if (link.includes("facebook.com")) {
                        socialIcon = face;
                    } else if (link.includes("instagram.com")) {
                        socialIcon = ins;
                    } else if (link.includes("whatsapp.com") || link.includes("wa.me")) {
                        socialIcon = wat;
                    } else if (link.includes("youtube.com")) {
                        socialIcon = you;
                    } else {
                        socialIcon = share;
                    }

                    return (
                        <div key={index} className={`temp-3-icon-circle ${link.includes("facebook.com") ? "facebook" :
                                link.includes("instagram.com") ? "instagram" :
                                    link.includes("whatsapp.com") || link.includes("wa.me") ? "whatsapp" :
                                        link.includes("youtube.com") ? "linkedin" : ""
                            }`}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={socialIcon} alt="Social" />
                            </a>
                        </div>
                    );
                }) || (
                        <>
                            <div className="temp-3-icon-circle facebook">
                                <img src={face} alt="" />
                            </div>
                            <div className="temp-3-icon-circle whatsapp">
                                <img src={wat} alt="" />
                            </div>
                            <div className="temp-3-icon-circle instagram">
                                <img src={ins} alt="" />
                            </div>
                            <div className="temp-3-icon-circle linkedin">
                                <img src={you} alt="" />
                            </div>
                        </>
                    )}
            </div>

            {/* Company Name */}
            <div className="temp-3-contact-info-section-second">
                <div className='temp-3-contact-get-second'>
                    <h2 className='temp-3-text-hoz-secondss'>{userData?.company_name || "Hoztox Technologies"}</h2>
                    <div className='temp-3-test'>
                        <div className="temp-3-contact-info-item-second">
                            <img src={con} alt="" />
                            <p className="temp-3-contact-text-second">
                                {userData?.address || "3rd Floor, Al Reem Mall, Calicut Road, Valanchery, Kerala 676 552"}
                            </p>
                        </div>
                        <div className="temp-3-contact-info-item-second">
                            <img src={mail} alt="" />
                            <p className="temp-3-contact-text-second">{userData?.email || "hoztextechnologies@gmail.com"}</p>
                        </div>
                        <div className="temp-3-contact-info-item-second">
                            <img src={glob} alt="" />
                            <p className="temp-3-contact-text-second">{userData?.website || "https://hoztox.com/"}</p>
                        </div>
                        <div className="temp-3-contact-info-item-second">
                            <img src={phone} alt="" />
                            <p className="temp-3-contact-text-second">{userData?.contact_number || "+91 9539546459"}</p>
                        </div>
                    </div>
                    <div className="temp-3-button-group">
                        <button className="temp-3-action-btn-share">
                            <img src={share} alt="" className='white-filter' />
                            Share
                        </button>
                        <button className="temp-3-action-btn-down">
                            <img src={down} alt="" className='white-filter' />
                            Save Contact
                        </button>
                        <button className="temp-3-action-btn-qr">
                            <img src={qr} alt="" className='white-filter' />
                            Start
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="temp-3-form-section">
                <div className="temp-3-get-in">
                    <h2 className="temp-3-get-title">Get In Touch</h2>

                    <div className="temp-3-form-group">
                        <label className="temp-3-form-label">Name</label>
                        <input
                            type="text"
                            className="temp-3-form-input"
                        />
                    </div>

                    <div className="temp-3-form-group">
                        <label className="temp-3-form-label">Mobile</label>
                        <input
                            type="text"
                            className="temp-3-form-input"
                        />
                    </div>

                    <div className="temp-3-form-group">
                        <label className="temp-3-form-label">Email</label>
                        <input
                            type="email"
                            className="temp-3-form-input"
                        />
                    </div>

                    <div className="temp-3-form-group">
                        <label className="temp-3-form-label">Message</label>
                        <input
                            className="temp-3-form-textarea"
                            rows="4"
                        ></input>
                    </div>

                    <button className="temp-3-submit-button">
                        Send
                    </button>
                </div>
            </div>

            <div className="map-sectionss">
                <div className="temp-3-get-in-map">
                    <h2 className="map-title-temp-3">Map</h2>
                    <div className="map-containerss" style={{ borderRadius: '1px' }}>
                        {userData?.location_map ? (
                            <iframe
                                src={`https://maps.google.com/maps?q=${extractCoordinates(userData.location_map)}&output=embed`}
                                title="Location Map"
                                className="map-images-temp-3"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                allowFullScreen
                                style={{ borderRadius: '1px' }}
                            ></iframe>
                        ) : (
                            <img
                                src={map}
                                alt="Location Map"
                                className="map-images-temp-3"
                                style={{ borderRadius: '1px' }}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="footer-temp-3">
                <div className='foot-temp-3'>
                    copyright @ 2022 - {new Date().getFullYear()} {userData?.company_name || "Hoztox"}
                </div>
            </div>
        </div>
    );
};

export default Template3;