import React, { useState, useEffect } from 'react';
import logo from "../../../assets/images/document-attachment.png";
import add from "../../../assets/images/Frame 162509.png";
import './AddUser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../Utils/config';


const AddUserForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        company_name: '',
        address: '',
        country: '',
        city: '',
        contact_number: '',
        mobile_number: '',
        email: '',
        website: '',
        logo: null,
        password: '',
        profile_image: null,
        reEnterPassword: '',
        social_media_links: [''],
        location_map: '',
        status: 'Active',
        approval_status: 'Pending'
    });

  
    const [logoFileName, setLogoFileName] = useState("");
    const [profileFileName, setProfileFileName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            console.log("Selected logo file:", file);
            setLogoFileName(file.name);
    
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFormData({ ...formData, logo: reader.result }); // Store Base64
            };
        }
    };
    
    
    const handleProfileFileChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            console.log("Selected profile file:", file);
            setProfileFileName(file.name);
    
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFormData({ ...formData, profile_image: reader.result }); // Store Base64
            };
        }
    };
    
    
    const handleSocialMediaChange = (index, value) => {
        const updatedLinks = [...formData.social_media_links];
        updatedLinks[index] = value;
        setFormData({ ...formData, social_media_links: updatedLinks });
    };

    const addSocialMediaField = () => {
        setFormData({
            ...formData,
            social_media_links: [...formData.social_media_links, '']
        });
    };

    const removeSocialMediaField = (index) => {
        const updatedLinks = [...formData.social_media_links];
        updatedLinks.splice(index, 1);
        setFormData({ ...formData, social_media_links: updatedLinks });
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.username) {
            const errorMessage = "Name, Email, and Username are required fields";
            alert(errorMessage);
            setError(errorMessage);
            return false;
        }
    
        if (formData.password !== formData.reEnterPassword) {
            const errorMessage = "Passwords do not match";
            alert(errorMessage);
            setError(errorMessage);
            return false;
        }
    
        return true;
    };
    

    const handleNextClick = (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        try {
            const dataToStore = { ...formData };
            
            localStorage.setItem("tempUserData", JSON.stringify(dataToStore));
            console.log("User data saved temporarily:", dataToStore);
            navigate("/add-template"); 
        } catch (error) {
            console.error("Error saving user data temporarily:", error);
            setError("Failed to save user data. Please try again.");
        }
    };
    
    
    return (
        <div className="add-vendorss-wrapper">
            <h1 className="add-vendor-title">Add Users</h1>

            <div className="form-wrapper">
              

                <form onSubmit={handleNextClick}>
                    <div className="section">
                        <h2 className="section-title">Basic Information</h2>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group-user">
                                <label>Username*</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    name="company_name"
                                    placeholder="Enter Company Name"
                                    value={formData.company_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group-user">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Enter Country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group-user">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter City"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group-user">
                                <label>Contact Number</label>
                                <input
                                    type="text"
                                    name="contact_number"
                                    placeholder="Enter Contact Number"
                                    value={formData.contact_number}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Mobile Number</label>
                                <input
                                    type="text"
                                    name="mobile_number"
                                    placeholder="Enter Mobile Number"
                                    value={formData.mobile_number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group-user">
                                <label>Website</label>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Enter Website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Logo</label>
                                <div className="file-upload-container">
                                    <div className="file-input-wrapper">
                                        <input
                                            type="text"
                                            readOnly
                                            placeholder="Choose File"
                                            className="file-text-input"
                                            value={logoFileName}
                                        />
                                        <label className="file-upload-button">
                                            <input
                                                type="file"
                                                name="logo"
                                                onChange={handleFileChange}
                                                hidden
                                            />
                                            <img src={logo} alt="" />
                                        </label>
                                    </div>
                                    <p className="file-status">{logoFileName ? '' : 'No file chosen'}</p>
                                </div>
                            </div>
                            <div className="form-group-user">
                                <label>Profile Image</label>
                                <div className="file-upload-container">
                                    <div className="file-input-wrapper">
                                        <input
                                            type="text"
                                            readOnly
                                            placeholder="Choose File"
                                            className="file-text-input"
                                            value={profileFileName}
                                        />
                                        <label className="file-upload-button">
                                            <input
                                                type="file"
                                                name="profile_image"
                                                onChange={handleProfileFileChange}
                                                hidden
                                            />
                                            <img src={logo} alt="" />
                                        </label>
                                    </div>
                                    <p className="file-status">{profileFileName ? '' : 'No file chosen'}</p>
                                </div>
                            </div>
                            <div className="form-group-user social-media-section">
                                <label>Social Media Links</label>
                                {formData.social_media_links.map((link, index) => (
                                    <div key={index} className="social-media-input-container">
                                        <div className="social-media-input-wrapper">
                                            <input
                                                type="text"
                                                placeholder="Enter Social Media Link"
                                                value={link}
                                                onChange={(e) => handleSocialMediaChange(index, e.target.value)}
                                            />
                                            <div
                                                className={index === formData.social_media_links.length - 1 ? "add-icon-wrapper" : "remove-icon-wrapper"}
                                                onClick={index === formData.social_media_links.length - 1 ? addSocialMediaField : () => removeSocialMediaField(index)}
                                            >
                                                {index === formData.social_media_links.length - 1 ? (
                                                    <img src={add} alt="Add" className="add-icon" />
                                                ) : (
                                                    <span className="remove-icon">-</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="form-group-user">
                                <label>Location Map</label>
                                <input
                                    type="text"
                                    name="location_map"
                                    placeholder="Enter Location Map URL"
                                    value={formData.location_map}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>


                    </div>

                    {/* Credentials Section */}
                    <div className="section">
                        <h2 className="section-title">Credentials</h2>

                        <div className="form-row">
                            <div className="form-group-user">
                                <label>Password*</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group-user">
                                <label>Re-Enter Password*</label>
                                <input
                                    type="password"
                                    name="reEnterPassword"
                                    placeholder="Re-Enter Password"
                                    value={formData.reEnterPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Buttons */}
                    <div className="form-buttons">
                        <button
                            type="button"
                            className="next-button"
                            onClick={handleNextClick}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Saving...' : 'Next'}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserForm;