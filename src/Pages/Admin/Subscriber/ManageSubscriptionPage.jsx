import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import ManageSubscriber from "../../../Components/Admin/Subscriber/ManageSubscriber";
import "./Adashboard.css";

const ManageSubscriberPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <ManageSubscriber/>
            </div>
        </div>   
    );
}

export default ManageSubscriberPage;
