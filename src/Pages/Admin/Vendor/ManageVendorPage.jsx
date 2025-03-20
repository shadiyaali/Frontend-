import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import ManageVendor from "../../../Components/Admin/Vendor/ManageVendor";
import "./Adashboard.css";

const ManageVendorPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <ManageVendor/>
            </div>
        </div>   
    );
}

export default ManageVendorPage;
