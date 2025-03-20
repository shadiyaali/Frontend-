import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import AddUserForm from "../../../Components/Admin/User/Add User";
import "./Adashboard.css";

const AddUserPage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <AddUserForm/>
            </div>
        </div>   
    );
}

export default AddUserPage;
