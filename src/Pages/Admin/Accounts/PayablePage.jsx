import React from "react";
import ASidebar from "../../../Components/Admin/Asidebar";
import Payable from "../../../Components/Admin/Accounts/Payable";
import "./Adashboard.css";

const PayablePage = () => {
    return (
        <div className="app-container"> 
            <ASidebar/>
            <div className="main-content">     
                <Payable/>
            </div>
        </div>   
    );
}

export default PayablePage;
