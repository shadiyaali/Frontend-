import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import Receivable from "../../../Components/Admin/Accounts/Receivables";
import "./Adashboard.css";

const ReceivablePage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <Receivable/>
            </div>
        </div>   
    );
}

export default ReceivablePage;
