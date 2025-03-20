import React, { useState } from 'react';
import './AddSubscription.css';

const AddSubscriptionForm = () => {
  const [planName, setPlanName] = useState('');
  const [validity, setValidity] = useState('');

  const handlePlanNameChange = (e) => {
    setPlanName(e.target.value);
  };

  const handleValidityChange = (e) => {
    setValidity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { planName, validity });
    // Add your submission logic here
  };

  const handleCancel = () => {
    setPlanName('');
    setValidity('');
  };

  return (
    <div className="subscription-wrapper">
      <h2 className="subscription-title">Add Subscriptions</h2>
      
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <h2 className="section-title">Add a Plan</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>Plan Name</label>
                <input
                  type="text"
                  name="planName"
                  placeholder="Enter Plan Name"
                  value={planName}
                  onChange={handlePlanNameChange}
                />
              </div>
              
              <div className="form-group">
                <label>Validity in Days</label>
                <input
                  type="text"
                  name="validity"
                  placeholder="Enter Validity in Days"
                  value={validity}
                  onChange={handleValidityChange}
                />
              </div>
            </div>
          </div>

          {/* Form Buttons */}
          <div className="form-buttons">
            <button type="button" className="cancels-button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="submits-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubscriptionForm;