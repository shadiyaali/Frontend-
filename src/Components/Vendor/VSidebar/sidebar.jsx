import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../../../assets/images/NFC-LOGO.png";
import dash from "../../../assets/images/elements.png";
import dash2 from "../../../assets/images/user-group.png";
import dash3 from "../../../assets/images/thumbs-up.png";
import './sidebar.css';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const VSidebar = () => {
  const location = useLocation();
  
  // Set active page based on current route
  const [activePage, setActivePage] = useState("dashboard");
  const [activeMenus, setActiveMenus] = useState({
    users: false,
    subscribers: false,
    accounts: false
  });

  // Custom active color
  const ACTIVE_COLOR = "#3A4DE9";

  // Update active page when route changes
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/' || path === '/vendor-dashboard') {
      setActivePage("dashboard");
    } else if (path.includes('/users')) {
      setActivePage("users");
      setActiveMenus(prev => ({...prev, users: true}));
    } else if (path.includes('/subscribers')) {
      setActivePage("subscribers");
      setActiveMenus(prev => ({...prev, subscribers: true}));
    } else if (path.includes('/accounts')) {
      setActivePage("accounts");
      setActiveMenus(prev => ({...prev, accounts: true}));
    }
  }, [location]);

  const toggleMenu = (menu) => {
    setActiveMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  // Helper function to check if item is active
  const isActive = (page) => activePage === page;

  // Common styling for active items
  const getActiveStyles = (page) => ({
    backgroundColor: isActive(page) ? "#f0f8ff" : "transparent"
  });

  // Common styling for active text
  const getActiveTextStyles = (page) => ({
    color: isActive(page) ? ACTIVE_COLOR : "inherit"
  });

  // Icon filter for active items - using the exact blue color
  const getActiveIconFilter = (page) => {
    if (!isActive(page)) return { filter: "none" };
    
    // This creates a CSS filter that will transform the icon to #3A4DE9
    return {
      filter: "brightness(0) saturate(100%) invert(28%) sepia(84%) saturate(3835%) hue-rotate(231deg) brightness(95%) contrast(98%)"
    };
  };

  // Chevron rotation style for open menus
  const getChevronStyle = (menu) => ({
    transform: activeMenus[menu] ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
    color: isActive(menu) ? ACTIVE_COLOR : "#999999"
  });

  return (
    <div className="nfc-sidebar">
      <div className="sidebar-logo">
        <div>
          <img 
            src={logo} 
            alt="Icon" 
            className={isActive("dashboard") ? "active-logo" : ""}
          />
        </div>
      </div>

      {/* Dashboard Menu Item */}
      <div 
        className="sidebar-dashboard menu-item-content"
        onClick={() => setActivePage("dashboard")}
        style={getActiveStyles("dashboard")}
      >
        <Link to="/vendor-dashboard">
          <div className="dashboard-item">
            <img 
              src={dash} 
              alt="Icon" 
              style={getActiveIconFilter("dashboard")}
            />
            <span style={getActiveTextStyles("dashboard")}>
              Dashboard
            </span>
          </div>
        </Link>
      </div>

      <div className="menu-section">
        <div className="menu-title">MENU</div>

        {/* Users Menu Item */}
        <div className="menu-item">
          <div 
            className="menu-item-content" 
            onClick={() => toggleMenu('users')}
            style={getActiveStyles("users")}
          >
            <div className='dashboard-item'>
              <img 
                src={dash2} 
                alt="Icon" 
                style={getActiveIconFilter("users")}
              />
              <span style={getActiveTextStyles("users")}>Users</span>
            </div>
            <ChevronDown 
              size={16} 
              style={getChevronStyle('users')}
            />
          </div>
          {activeMenus.users && (
            <div className="submenu">
              <Link to="/users/add">
                <div className="submenu-item" 
                  style={location.pathname === '/users/add' ? { color: ACTIVE_COLOR } : {}}
                >
                  Add User
                </div>
              </Link>
              <Link to="/users/manage">
                <div className="submenu-item"
                  style={location.pathname === '/users/manage' ? { color: ACTIVE_COLOR } : {}}
                >
                  Manage Users
                </div>
              </Link>
              <Link to="/users/pending">
                <div className="submenu-item"
                  style={location.pathname === '/users/pending' ? { color: ACTIVE_COLOR } : {}}
                >
                  Pending Users
                </div>
              </Link>
              <Link to="/users/active">
                <div className="submenu-item"
                  style={location.pathname === '/users/active' ? { color: ACTIVE_COLOR } : {}}
                >
                  Active Users
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Subscribers Menu Item */}
        <div className="menu-item">
          <div 
            className="menu-item-content" 
            onClick={() => toggleMenu('subscribers')}
            style={getActiveStyles("subscribers")}
          >
            <div className='dashboard-item'>
              <img 
                src={dash3} 
                alt="Icon" 
                style={getActiveIconFilter("subscribers")}
              />
              <span style={getActiveTextStyles("subscribers")}>Subscribers</span>
            </div>
            <ChevronDown 
              size={16} 
              style={getChevronStyle('subscribers')}
            />
          </div>
          {activeMenus.subscribers && (
            <div className="submenu">
              <Link to="/subscribers/add">
                <div className="submenu-item"
                  style={location.pathname === '/subscribers/add' ? { color: ACTIVE_COLOR } : {}}
                >
                  Add Subscriber
                </div>
              </Link>
              <Link to="/subscribers/manage">
                <div className="submenu-item"
                  style={location.pathname === '/subscribers/manage' ? { color: ACTIVE_COLOR } : {}}
                >
                  Manage Subscribers
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-title">MASTERS</div>
        
        {/* Accounts Menu Item */}
        <div className="menu-item">
          <div 
            className="menu-item-content" 
            onClick={() => toggleMenu('accounts')}
            style={getActiveStyles("accounts")}
          >
            <span style={getActiveTextStyles("accounts")}>Accounts</span>
            <ChevronDown 
              size={16} 
              style={getChevronStyle('accounts')}
            />
          </div>
          {activeMenus.accounts && (
            <div className="submenu">
              <Link to="/accounts/settings">
                <div className="submenu-item"
                  style={location.pathname === '/accounts/settings' ? { color: ACTIVE_COLOR } : {}}
                >
                  Account Settings
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VSidebar;