import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../../assets/images/NFC-LOGO.png";
import dash from "../../assets/images/elements.png";
import dash1 from "../../assets/images/crowdfunding.svg";
import dash2 from "../../assets/images/user-group.png";
import dash3 from "../../assets/images/thumbs-up.png";
import dash4 from "../../assets/images/calendar-03.png";
import dash5 from "../../assets/images/accounts.png";
import './Asidebar.css';
import { ChevronDown } from 'lucide-react';

const ASidebar = () => {
    const location = useLocation();

    // Set active page based on current route
    const [activePage, setActivePage] = useState("dashboard");
    const [activeMenus, setActiveMenus] = useState({
        vendor: false,
        users: false,
        subscribers: false,
        subscriptions: false,
        accounts: false,
        templates: false
    });

    // Custom active color
    const ACTIVE_COLOR = "#3A4DE9";

    // Update active page and open the corresponding submenu based on route
    useEffect(() => {
        const path = location.pathname;

        // Reset all active menus first
        const newActiveMenus = {
            vendor: false,
            users: false,
            subscribers: false,
            subscriptions: false,
            accounts: false,
            templates: false
        };

        // Set the active page based on the current path
        if (path === '/') {
            setActivePage("dashboard");
        } else if (path.includes('/vendor') || path === '/add-vendor' || path === '/manage-vendor') {
            setActivePage("vendor");
            newActiveMenus.vendor = true;
        } else if (path.includes('/users') || path === '/add-user' || path === '/manage-user') {
            setActivePage("users");
            newActiveMenus.users = true;
        } else if (path.includes('/subscribers') || path === '/add-subscriber' || path === '/manage-subscriber') {
            setActivePage("subscribers");
            newActiveMenus.subscribers = true;
        } else if (path.includes('/subscriptions')|| path === '/add-subscription' || path === '/manage-subscription') {
            setActivePage("subscriptions");
            newActiveMenus.subscriptions = true;
        } else if (path.includes('/accounts') || path === '/receivables' || path === '/payables') {
            setActivePage("accounts");
            newActiveMenus.accounts = true;
        } else if (path.includes('/templates')) {
            setActivePage("templates");
            newActiveMenus.templates = true;
        }

        setActiveMenus(newActiveMenus);
    }, [location]);

    // Toggle submenu without affecting active page
    const toggleMenu = (menu) => {
        // If clicking on a menu, set it as the active page
        if (menu !== activePage) {
            setActivePage(menu);
        }

        // Toggle the menu
        setActiveMenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    // Check if a page is active
    const isActive = (page) => activePage === page;

    // Check if a menu should be active (for styling)
    const isMenuActive = (menu) => activePage === menu || activeMenus[menu];

    // Styling for active items
    const getActiveStyles = (page) => ({
        backgroundColor: isMenuActive(page) ? "#f0f8ff" : "transparent"
    });


    const getActiveTextStyles = (page) => ({
        color: isMenuActive(page) ? ACTIVE_COLOR : "#111111"
    });


    const getActiveIconFilter = (page) => {
        if (!isMenuActive(page)) return { filter: "none" };
        return {
            filter: "brightness(0) saturate(100%) invert(28%) sepia(84%) saturate(3835%) hue-rotate(231deg) brightness(95%) contrast(98%)"
        };
    };


    const getChevronStyle = (menu) => ({
        transform: activeMenus[menu] ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 0.3s ease',
        color: isMenuActive(menu) ? ACTIVE_COLOR : "#999999"
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
                <Link to="/">
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

                {/* Vendor Menu Item */}
                <div className="menu-item">
                    <div
                        className="menu-item-content"
                        onClick={() => toggleMenu('vendor')}
                        style={getActiveStyles("vendor")}
                    >
                        <div className='dashboard-item'>
                            <img
                                src={dash1}
                                alt="Icon"
                                style={getActiveIconFilter("vendor")}
                            />
                            <span style={getActiveTextStyles("vendor")}>Vendor</span>
                        </div>
                        <ChevronDown
                            size={16}
                            style={getChevronStyle('vendor')}
                        />
                    </div>
                    {activeMenus.vendor && (
                        <div className="submenu">
                            <Link to="/add-vendor">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/add-vendor' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Add Vendor
                                </div>
                            </Link>
                            <Link to="/manage-vendor">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/manage-vendor' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Manage Vendor
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

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
                            <Link to="/add-user">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/add-user' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Add User
                                </div>
                            </Link>
                            <Link to="/manage-user">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/manage-user' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Manage Users
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
                            <Link to="/add-subscriber">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/add-subscriber' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Add Subscriber
                                </div>
                            </Link>
                            <Link to="/manage-subscriber">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/manage-subscriber' ? { color: ACTIVE_COLOR } : {}}
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

                {/* Subscriptions Menu Item */}
                <div className="menu-item">
                    <div
                        className="menu-item-content"
                        onClick={() => toggleMenu('subscriptions')}
                        style={getActiveStyles("subscriptions")}
                    >
                        <div className='dashboard-item'>
                            <img
                                src={dash4}
                                alt="Icon"
                                style={getActiveIconFilter("subscriptions")}
                            />
                            <span style={getActiveTextStyles("subscriptions")}>Subscriptions</span>
                        </div>
                        <ChevronDown
                            size={16}
                            style={getChevronStyle('subscriptions')}
                        />
                    </div>
                    {activeMenus.subscriptions && (
                        <div className="submenu">
                            <Link to="/add-subscription">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/add-subscription' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Add Subscriptions  
                                </div>
                            </Link>
                            <Link to="/manage-subscription">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/manage-subscription' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Manage Subscriptions 
                                </div>
                            </Link>
                        </div>
                    )}
                </div>


                <div className="menu-item">
                    <div
                        className="menu-item-content"
                        onClick={() => toggleMenu('accounts')}
                        style={getActiveStyles("accounts")}
                    >
                        <div className='dashboard-item'>
                            <img
                                src={dash5}
                                alt="Icon"
                                style={getActiveIconFilter("subscriptions")}
                            />
                            <span style={getActiveTextStyles("subscriptions")}>Accounts</span>
                        </div>
                        <ChevronDown
                            size={16}
                            style={getChevronStyle('accounts')}
                        />
                    </div>
                    {activeMenus.accounts && (
                        <div className="submenu">
                            <Link to="/receivables">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/receivables' ? { color: ACTIVE_COLOR } : {}}
                                >
                                   Receivables 
                                </div>
                            </Link>
                            <Link to="/payables">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/payables' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Payables
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
 

                {/* Templates Menu Item */}
                <div className="menu-item">
                    <div
                        className="menu-item-content"
                        onClick={() => toggleMenu('templates')}
                        style={getActiveStyles("templates")}
                    >
                        <span style={getActiveTextStyles("templates")}>Templates</span>
                        <ChevronDown
                            size={16}
                            style={getChevronStyle('templates')}
                        />
                    </div>
                    {activeMenus.templates && (
                        <div className="submenu">
                            <Link to="/manage-templates">
                                <div
                                    className="submenu-item"
                                    style={location.pathname === '/manage-templates' ? { color: ACTIVE_COLOR } : {}}
                                >
                                    Manage Templates
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ASidebar;