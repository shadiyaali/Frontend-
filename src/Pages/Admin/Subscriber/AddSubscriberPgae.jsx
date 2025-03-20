import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import AddSubscriberForm from "../../../Components/Admin/Subscriber/AddSubscriber";
import "./Adashboard.css";

const AddSubscriberPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <AddSubscriberForm/>
            </div>
        </div>   
    );
}

export default AddSubscriberPage;
