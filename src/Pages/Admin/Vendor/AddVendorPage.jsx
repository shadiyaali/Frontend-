import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import AddVendorForm from "../../../Components/Admin/Vendor/AddVendor";
import "./Adashboard.css";

const AddVendorPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <AddVendorForm/>
            </div>
        </div>   
    );
}

export default AddVendorPage;
