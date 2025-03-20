import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import ManageUser from "../../../Components/Admin/User/ManageUser";
import "./Adashboard.css";

const ManageUserPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <ManageUser/>
            </div>
        </div>   
    );
}

export default ManageUserPage;
