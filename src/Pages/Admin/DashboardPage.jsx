import React from "react";
import ASidebar from "../../Components/Admin/Asidebar";
import Dashboard from "../../Components/Admin/Dashboard/Dashboard";
import "./Adashboard.css";

const DashboardPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <Dashboard/>
            </div>
        </div>   
    );
}

export default DashboardPage;
