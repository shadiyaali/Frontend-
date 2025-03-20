import React, { useState, useEffect } from 'react';
import './EditVendor.css';
import logo from "../../../assets/images/logo-bright-text 1.png";
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom';  
import { BASE_URL } from '../../../Utils/config'; 


const EditVendorForm = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  
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
    logo: '',
    username: '',
    subDomain: '',
    status: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  
 
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [showSubdomainModal, setShowSubdomainModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  
  const [tempUsername, setTempUsername] = useState('');
  const [tempSubdomain, setTempSubdomain] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/nfc/vendors/${id}/`);
     
        setFormData({
          vendorName: response.data.vendor_name || '',
          address: response.data.address || '',
          country: response.data.country || '',
          city: response.data.city || '',
          contactPerson: response.data.contact_person || '',
          contactNumber: response.data.contact_number1 || '',
          contactNumber2: response.data.contact_number2 || '',
          email: response.data.email || '',
          website: response.data.website || '',
          logo: response.data.logo || '',
          username: response.data.username || '',
          subDomain: response.data.sub_domain || '',
          status: response.data.status || ''
        });
        
        // Initialize modal form states
        setTempUsername(response.data.username || '');
        setTempSubdomain(response.data.sub_domain || '');
        
        // Set logo preview
        setLogoPreview(response.data.logo);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching vendor data:', err);
        setError('Failed to load vendor data');
        setLoading(false);
      }
    };

    if (id) {
      fetchVendorData();
    } else {
      setError('No vendor ID provided');
      setLoading(false);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
 
 

 
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
 
      const updateData = new FormData();
      updateData.append('vendor_name', formData.vendorName);
      updateData.append('address', formData.address);
      updateData.append('country', formData.country);
      updateData.append('city', formData.city);
      updateData.append('contact_person', formData.contactPerson);
      updateData.append('contact_number1', formData.contactNumber);
      updateData.append('contact_number2', formData.contactNumber2);
      updateData.append('email', formData.email);
      updateData.append('website', formData.website);
      updateData.append('username', formData.username);
      updateData.append('sub_domain', formData.subDomain);
      
      // Only append logo if a new file was selected
      if (logoFile) {
        updateData.append('logo', logoFile);
      }
      
      // Send PUT request to update vendor
      const response = await axios.put(`${BASE_URL}/nfc/vendors/${id}/`, updateData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('Update successful:', response.data);
      alert('Vendor updated successfully!');
      navigate('/manage-vendor');  
    } catch (err) {
      console.error('Error updating vendor:', err);
      alert('Failed to update vendor. Please try again.');
    }
  };

// Update the modal handlers to use the same PUT API

// Handle username save
const handleUsernameSave = async () => {
  try {
    // Create FormData object for the update
    const updateData = new FormData();
    
    // Append the current form data
    updateData.append('vendor_name', formData.vendorName);
    updateData.append('address', formData.address);
    updateData.append('country', formData.country);
    updateData.append('city', formData.city);
    updateData.append('contact_person', formData.contactPerson);
    updateData.append('contact_number1', formData.contactNumber);
    updateData.append('contact_number2', formData.contactNumber2);
    updateData.append('email', formData.email);
    updateData.append('website', formData.website);
    updateData.append('sub_domain', formData.subDomain);
    
    // Update with new username
    updateData.append('username', tempUsername);
    
    // Send PUT request to update vendor
    const response = await axios.put(`${BASE_URL}/nfc/vendors/${id}/`, updateData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    // Update form data state with new username
    setFormData({...formData, username: tempUsername});
    
    console.log('Username update successful:', response.data);
    alert('Username updated successfully!');
    setShowUsernameModal(false);
  } catch (err) {
    console.error('Error updating username:', err);
    alert('Failed to update username. Please try again.');
  }
};

// Handle subdomain save
const handleSubdomainSave = async () => {
  try {
    // Create FormData object for the update
    const updateData = new FormData();
    
    // Append the current form data
    updateData.append('vendor_name', formData.vendorName);
    updateData.append('address', formData.address);
    updateData.append('country', formData.country);
    updateData.append('city', formData.city);
    updateData.append('contact_person', formData.contactPerson);
    updateData.append('contact_number1', formData.contactNumber);
    updateData.append('contact_number2', formData.contactNumber2);
    updateData.append('email', formData.email);
    updateData.append('website', formData.website);
    updateData.append('username', formData.username);
    
    // Update with new subdomain
    updateData.append('sub_domain', tempSubdomain);
    
    // Send PUT request to update vendor
    const response = await axios.put(`${BASE_URL}/nfc/vendors/${id}/`, updateData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    // Update form data state with new subdomain
    setFormData({...formData, subDomain: tempSubdomain});
    
    console.log('Subdomain update successful:', response.data);
    alert('Subdomain updated successfully!');
    setShowSubdomainModal(false);
  } catch (err) {
    console.error('Error updating subdomain:', err);
    alert('Failed to update subdomain. Please try again.');
  }
};

// Handle password save with proper validation
const handlePasswordSave = async () => {
  if (!currentPassword) {
    alert("Please enter your current password");
    return;
  }
  
  if (!newPassword) {
    alert("Please enter a new password");
    return;
  }
  
  if (newPassword !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  try {
    const response = await axios.post(`${BASE_URL}/nfc/vendors-password/${id}/`, {
      current_password: currentPassword,
      new_password: newPassword,
    });

    console.log('Password update successful:', response.data);
    alert('Password updated successfully!');
    setShowPasswordModal(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  } catch (err) {
    console.error('Error updating password:', err);
    
    if (err.response && err.response.data) {
      if (err.response.data.detail === "Current password is incorrect") {
        alert("Current password is incorrect. Please try again.");
      } else if (err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Failed to update password. Please try again.");
      }
    } else {
      alert("Failed to update password. Please try again.");
    }
  }
};


  return (
    <div className="edit-vendor-container">
      <h1 className="edit-vendor-heading">Edit Vendor</h1>

      <div className="vendor-form-container">
        <form onSubmit={handleSubmit}>
          <div className="vendor-section">
            <h2 className="vendor-section-title">Basic Information</h2>

            <div className="vendor-form-row">
              <div className="vendor-form-group">
                <label>Vendor Name</label>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="vendor-form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="vendor-form-row">
              <div className="vendor-form-group">
                <label>Country</label>
                <div className="vendor-select-container">
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                  <span className="vendor-select-arrow"></span>
                </div>
              </div>
              <div className="vendor-form-group">
                <label>City</label>
                <div className="vendor-select-container">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <span className="vendor-select-arrow"></span>
                </div>
              </div>
            </div>

            <div className="vendor-form-row">
              <div className="vendor-form-group">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                />
              </div>
              <div className="vendor-form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="vendor-form-row">
              <div className="vendor-form-group">
                <label>Contact Number 2</label>
                <input
                  type="text"
                  name="contactNumber2"
                  value={formData.contactNumber2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="vendor-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="vendor-form-row">
              <div className="vendor-form-group">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
              <div className="vendor-form-group">
                <label>Logo</label>
                <div className="vendor-logo-container">
                  <div className="vendor-logo-preview">
                    <img src={logoPreview || logo} alt="Vendor logo" />
                  </div>

                  <label className="vendor-change-logo-btn">
                    Change Logo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='buttons-all'>
            <div className="vendor-action-buttons-v">
              <button 
                type="button" 
                className="vendor-change-username-btn-v"
                onClick={() => setShowUsernameModal(true)}
              >
                Change User Name
              </button>
              <button 
                type="button" 
                className="vendor-change-subdomain-btn-v"
                onClick={() => setShowSubdomainModal(true)}
              >
                Change Subdomain
              </button>
              <button 
                type="button" 
                className="vendor-change-password-btn-v"
                onClick={() => setShowPasswordModal(true)}
              >
                Change Password
              </button>
            </div>
            <div className="vendor-last-buttons-v">
              <button 
                type="button" 
                className="vendor-cancel-btn-v"
                onClick={() => navigate(-1)} // Go back to previous page
              >
                Cancel
              </button>
              <button type="submit" className="vendor-submit-btn-v">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* Username Modal */}
      {showUsernameModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Change User Name</h2>
            <div className="modal-form-group">
              <label>User Name</label>
              <input
                type="text"
                placeholder="Enter User Name"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button className="cancel-button-v" onClick={() => setShowUsernameModal(false)}>
                Cancel
              </button>
              <button className="save-button-v" onClick={handleUsernameSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Subdomain Modal */}
      {showSubdomainModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Change Subdomain</h2>
            <div className="modal-form-group">
              <label>Subdomain</label>
              <div className="subdomain-input-container">
                <input
                  type="text"
                  placeholder="Enter Subdomain"
                  value={tempSubdomain}
                  onChange={(e) => setTempSubdomain(e.target.value)}
                />
                <span className="domain-suffix-v">nfcglobal.com</span>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="cancel-button-v" onClick={() => setShowSubdomainModal(false)}>
                Cancel
              </button>
              <button className="save-button-v" onClick={handleSubdomainSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
 
      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Change Password</h2>
            <div className="modal-form-group">
              <label>Current Password</label>
              <input
                type="password"
                placeholder="Enter Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="modal-form-group">
              <label>New Password</label>
              <input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="modal-form-group">
              <label>Re Enter Password</label>
              <input
                type="password"
                placeholder="Re Enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button className="cancel-button-v" onClick={() => setShowPasswordModal(false)}>
                Cancel
              </button>
              <button className="save-button-v" onClick={handlePasswordSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditVendorForm;