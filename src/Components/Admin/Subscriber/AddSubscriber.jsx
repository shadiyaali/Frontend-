import React, { useState } from 'react';
import './AddSubscriber.css';

const AddSubscriberForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    details: '',
    subscriptionPlan: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="add-vendorss-wrapper">
      <h1 className="add-vendor-title">Add Subscribers</h1>
      
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <h2 className="section-title">Subscriber</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>Select User</label>
                <div className="select-container">
                  <select
                    name="user"
                    value={formData.user}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>Select</option>
                    {/* Add your user options here */}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Details</label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter Details"
                  value={formData.details}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Subscription Plan</label>
                <div className="select-container">
                  <select
                    name="subscriptionPlan"
                    value={formData.subscriptionPlan}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>Select</option>
                    {/* Add your subscription plan options here */}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Form Buttons */}
          <div className="form-buttons">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubscriberForm;