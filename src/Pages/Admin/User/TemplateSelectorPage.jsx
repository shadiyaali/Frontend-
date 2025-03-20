import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import TemplateSelector from "../../../Components/Admin/User/AddTemplate";
import "./Adashboard.css";

const AddTemplatePage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <TemplateSelector/>
            </div>
        </div>   
    );
}

export default AddTemplatePage;
