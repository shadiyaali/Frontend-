import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import ManageSubscrption from "../../../Components/Admin/Subscription/ManageSubscription";
import "./Adashboard.css";

const MangeSubscrptionPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <ManageSubscrption/>
            </div>
        </div>   
    );
}

export default MangeSubscrptionPage;
