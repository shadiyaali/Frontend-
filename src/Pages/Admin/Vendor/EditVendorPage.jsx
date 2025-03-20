import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import EditVendorForm from "../../../Components/Admin/Vendor/EditVendor";
import "./Adashboard.css";

const EditVendorPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <EditVendorForm/>
            </div>
        </div>   
    );
}

export default EditVendorPage;
