import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import AddSubscriptionForm from "../../../Components/Admin/Subscription/AddSubscription";
import "./Adashboard.css";

const AddSubscrptionPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <AddSubscriptionForm/>
            </div>
        </div>   
    );
}

export default AddSubscrptionPage;
