import React from "react";
import VSidebar from "../../Components/Vendor/VSidebar/sidebar";
import VDashboard from "../../Components/Vendor/VDashboard/Dashboard";
import "./Vdashboard.css";

const VDashboardPage = () => {
    return (
        <div className="app-container"> 
            <VSidebar/>
            <div className="main-content">     
                <VDashboard/>
            </div>
        </div>   
    );
}

export default VDashboardPage;
