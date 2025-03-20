import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import DashboardPage from './Pages/Admin/DashboardPage';  
import VDashboardPage from "./Pages/Vendor/VDashboardPage"
import AddVendorPage from "./Pages/Admin/Vendor/AddVendorPage"
import  ManageVendorPage from "./Pages/Admin/Vendor/ManageVendorPage"
import AddUserPage from "./Pages/Admin/User/AddUserPage"
import ManageUserPage from "./Pages/Admin/User/ManageUserPage"
import AddSubscriberPage from "./Pages/Admin/Subscriber/AddSubscriberPgae"
import ManageSubscriberPage from "./Pages/Admin/Subscriber/ManageSubscriptionPage"
import AddSubscrptionPage from "./Pages/Admin/Subscription/AddSubscriptionPage"
import MangeSubscrptionPage from "./Pages/Admin/Subscription/ManageSubscriptionPage"
import ReceivablePage from  "./Pages/Admin/Accounts/ReceivablePage"
import PayablePage from  "./Pages/Admin/Accounts/PayablePage"
import EditVendorPage from "./Pages/Admin/Vendor/EditVendorPage"
import AddTemplatePage from "./Pages/Admin/User/TemplateSelectorPage"
import Template1 from "./Components/Admin/Templates/Template1/Template1"
import Template2 from "./Components/Admin/Templates/Template2/Template2"
import Template3 from "./Components/Admin/Templates/Template3/Template3"
import Template4 from "./Components/Admin/Templates/Template4/Template4"
import Template5 from "./Components/Admin/Templates/Template5/Template5"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add-vendor" element={<AddVendorPage />} />
          <Route path="/manage-vendor" element={< ManageVendorPage />} />
          <Route path="/add-user" element={< AddUserPage />} />
          <Route path="/manage-user" element={< ManageUserPage />} />
          <Route path="/add-subscriber" element={< AddSubscriberPage />} />
          <Route path="/manage-subscriber" element={< ManageSubscriberPage />} />
          <Route path="/add-subscription" element={< AddSubscrptionPage />} />
          <Route path="/manage-subscription" element={< MangeSubscrptionPage />} />
          <Route path="/receivables" element={< ReceivablePage />} />
          <Route path="/payables" element={< PayablePage />} />
          <Route path="/edit-vendor/:id" element={<EditVendorPage />} />
          <Route path="/add-template" element={< AddTemplatePage />} />
   
          <Route path="/template1" element={< Template1 />} />
          <Route path="/template2" element={< Template2 />} />
          <Route path="/template3" element={< Template3 />} />
          <Route path="/template4" element={< Template4 />} />
          <Route path="/template5" element={< Template5 />} />
        </Routes>


        <Routes>
          <Route path="/vendor-dashboard" element={<VDashboardPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
