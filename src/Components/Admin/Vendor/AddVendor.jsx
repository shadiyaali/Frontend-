import React, { useState, useEffect } from 'react';
import logo from "../../../assets/images/document-attachment.png";
import './AddVendor.css';
import axios from "axios";
import { BASE_URL } from '../../../Utils/config'; 
import { toast, Toaster } from "react-hot-toast";

const AddVendorForm = () => {
  const [formData, setFormData] = useState({
    vendorName: '',
    address: '',
    country: '',
    city: '',
    contactPerson: '',
    contactNumber: '',
    contactNumber2: '',
    email: '',
    website: '',
    logo: null,
    userName: '',
    password: '',
    subdomain: '',
    reEnterPassword: ''
  });
  
  const [fileChosen, setFileChosen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, logo: e.target.files[0] });
      setFileChosen(true);
    }
  };

  const validateForm = () => {
    if (!formData.vendorName) return "Vendor Name is required";
    if (!formData.email) return "Email is required";
    if (!formData.userName) return "Username is required";
    
    // Password validation
    if (formData.password !== formData.reEnterPassword) {
      return "Passwords do not match";
    }
    
    if (!formData.password) {
      return "Password is required";
    }
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }
    
    setLoading(true);
    
    // Create FormData for file upload
    const submissionData = new FormData();
    submissionData.append('username', formData.userName);
    submissionData.append('vendor_name', formData.vendorName);
    submissionData.append('address', formData.address);
    submissionData.append('country', formData.country);
    submissionData.append('city', formData.city);
    submissionData.append('contact_person', formData.contactPerson);
    submissionData.append('contact_number1', formData.contactNumber);
    submissionData.append('contact_number2', formData.contactNumber2);
    submissionData.append('email', formData.email);
    submissionData.append('website', formData.website);
    submissionData.append('sub_domain', formData.subdomain);
    submissionData.append('password', formData.password);
    submissionData.append('status', 'Active');  
    
  
    if (formData.logo) {
      submissionData.append('logo', formData.logo);
    }
    
    try {
      const response = await axios.post(`${BASE_URL}/nfc/vendors/`, submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log('Vendor added successfully:', response.data);
      
      
      alert('Vendor added successfully!');
      
     
      setFormData({
        vendorName: '',
        address: '',
        country: '',
        city: '',
        contactPerson: '',
        contactNumber: '',
        contactNumber2: '',
        email: '',
        website: '',
        logo: null,
        userName: '',
        password: '',
        subdomain: '',
        reEnterPassword: ''
      });
      setFileChosen(false);
      
    } catch (err) {
      console.error('Error adding vendor:', err);
      const errorMessage = err.response?.data?.message || 'Failed to add vendor. Please try again.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-vendorss-wrapper">
  
     
      
      <h1 className="add-vendor-title-vendor">Add Vendor</h1>
      
      <div className="form-wrapper-vendor">
        <form onSubmit={handleSubmit}>
          <div className="section-vendor">
            <h2 className="section-title-vendor">Basic Information</h2>
            
            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>Vendor Name*</label>
                <input
                  type="text"
                  name="vendorName"
                  placeholder="Enter Vendor Name"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group-vendor">
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

            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter Country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group-vendor">
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

            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Enter Contact Person"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group-vendor">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Enter Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>Contact Number 2</label>
                <input
                  type="text"
                  name="contactNumber2"
                  placeholder="Enter Contact Number 2"
                  value={formData.contactNumber2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group-vendor">
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
            </div>

            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter Website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group-vendor">
                <label>Logo</label>
                <div className="file-upload-container-vendor">
                  <div className="file-input-wrapper-vendor">
                    <input
                      type="text"
                      readOnly
                      placeholder="Choose File"
                      className="file-text-input"
                      value={fileChosen ? formData.logo.name : ""}
                    />
                    <label className="file-upload-button-vendor">
                      <input
                        type="file"
                        name="logo"
                        onChange={handleFileChange}
                        hidden
                      />
                      <img src={logo} alt="" />
                    </label>
                  </div>
                  <p className="file-status-vendor">
                    {fileChosen ? '' : 'No file chosen'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="section-vendor">
            <h2 className="section-title-vendor">Credentials</h2>
            
            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>User Name*</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter User Name"
                  value={formData.userName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group-vendor">
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
            </div>

            <div className="form-row-vendor">
              <div className="form-group-vendor">
                <label>Subdomain</label>
                <div className="subdomain-container-vendor">
                  <input
                    type="text"
                    name="subdomain"
                    placeholder="Enter Subdomain"
                    value={formData.subdomain}
                    onChange={handleInputChange}
                  />
                  <span className="domain-suffix-vendor">nfcglobal.com</span>
                </div>
              </div>
              <div className="form-group-vendor">
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

         
          <div className="form-buttons-vendor">
            <button 
              type="button" 
              className="cancel-button-vendor"
              onClick={() => {
          
                setFormData({
                  vendorName: '',
                  address: '',
                  country: '',
                  city: '',
                  contactPerson: '',
                  contactNumber: '',
                  contactNumber2: '',
                  email: '',
                  website: '',
                  logo: null,
                  userName: '',
                  password: '',
                  subdomain: '',
                  reEnterPassword: ''
                });
                setFileChosen(false);
                toast.dismiss();  
              }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button-vendor"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendorForm;