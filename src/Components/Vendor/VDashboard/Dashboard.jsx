import React, { useState, useRef, useEffect } from 'react';
import './Dashboard.css';
import { ChevronDown } from 'lucide-react';
import img1 from "../../../assets/images/Group 162507.png";
import img2 from "../../../assets/images/Group 162507(1).png";
import img3 from "../../../assets/images/Group 162508.png";
import img4 from "../../../assets/images/Group 162508(1).png";

const VDashboard = () => {
 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalItems, setTotalItems] = useState(0);
    const [paginatedData, setPaginatedData] = useState([]);
    const [collectionTimeFrame, setCollectionTimeFrame] = useState('This Month');
    const [revenueTimeFrame, setRevenueTimeFrame] = useState('This Week');
    const [expiringTimeFrame, setExpiringTimeFrame] = useState('This Week');
    const [collectionListTimeFrame, setCollectionListTimeFrame] = useState('This Week');

    
    const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
    const [revenueDropdownOpen, setRevenueDropdownOpen] = useState(false);
    const [expiringDropdownOpen, setExpiringDropdownOpen] = useState(false);
    const [collectionListDropdownOpen, setCollectionListDropdownOpen] = useState(false);

    
    const collectionDropdownRef = useRef(null);
    const revenueDropdownRef = useRef(null);
    const expiringDropdownRef = useRef(null);
    const collectionListDropdownRef = useRef(null);

   
    const timeFrameOptions = ['This Week', 'This Month', 'This Year'];

 
    const collectionData = {
        'This Week': {
            total: '$3500.00',
            collected: '$2700.00',
            pending: '$800.00',
            progressPercent: 77
        },
        'This Month': {
            total: '$5000.00',
            collected: '$4700.00',
            pending: '$2450.00',
            progressPercent: 74
        },
        'This Year': {
            total: '$24500.00',
            collected: '$21000.00',
            pending: '$3500.00',
            progressPercent: 86
        }
    };

    const revenueData = {
        'This Week': [
            { day: "M", incomeEnd: 175, expenseEnd: 135 },
            { day: "T", incomeEnd: 50, expenseEnd: 150 },
            { day: "W", incomeEnd: 80, expenseEnd: 120 },
            { day: "T", incomeEnd: 95, expenseEnd: 180 },
            { day: "F", incomeEnd: 148, expenseEnd: 175 },
            { day: "S", incomeEnd: 117, expenseEnd: 163 },
            { day: "S", incomeEnd: 69, expenseEnd: 167 }
        ],
        'This Month': [
            { day: "W1", incomeEnd: 135, expenseEnd: 105 },
            { day: "W2", incomeEnd: 90, expenseEnd: 140 },
            { day: "W3", incomeEnd: 120, expenseEnd: 110 },
            { day: "W4", incomeEnd: 155, expenseEnd: 140 }
        ],
        'This Year': [
            { day: "Jan", incomeEnd: 110, expenseEnd: 95 },
            { day: "Feb", incomeEnd: 130, expenseEnd: 110 },
            { day: "Mar", incomeEnd: 95, expenseEnd: 130 },
            { day: "Apr", incomeEnd: 180, expenseEnd: 150 },
            { day: "May", incomeEnd: 160, expenseEnd: 140 },
            { day: "Jun", incomeEnd: 140, expenseEnd: 120 },
            { day: "Jul", incomeEnd: 190, expenseEnd: 170 },
            { day: "Aug", incomeEnd: 200, expenseEnd: 160 },
            { day: "Sep", incomeEnd: 175, expenseEnd: 135 },
            { day: "Oct", incomeEnd: 195, expenseEnd: 155 },
            { day: "Nov", incomeEnd: 165, expenseEnd: 145 },
            { day: "Dec", incomeEnd: 220, expenseEnd: 180 }
        ]
    };

    const expiringData = {
        'This Week': [
            { id: '01', name: 'Shihabudheen', email: 'test@gmail.com', expiryDate: '09 May 2022' },
            { id: '02', name: 'Ahmed', email: 'ahmed@gmail.com', expiryDate: '10 May 2022' },
            { id: '03', name: 'Mohammad', email: 'mohammad@gmail.com',  expiryDate: '11 May 2022' },
            { id: '04', name: 'Sarah', email: 'sarah@gmail.com', expiryDate: '12 May 2022' },
            { id: '05', name: 'Omar', email: 'omar@gmail.com', expiryDate: '13 May 2022' },
            { id: '06', name: 'Shihabudheen', email: 'test@gmail.com', expiryDate: '09 May 2022' },
            { id: '07', name: 'Ahmed', email: 'ahmed@gmail.com', expiryDate: '10 May 2022' },
            { id: '08', name: 'Mohammad', email: 'mohammad@gmail.com', expiryDate: '11 May 2022' },
            { id: '09', name: 'Sarah', email: 'sarah@gmail.com', expiryDate: '12 May 2022' },
            { id: '10', name: 'Omar', email: 'omar@gmail.com',  expiryDate: '13 May 2022' }
        ],
        'This Month': [
            { id: '01', name: 'Shihabudheen', email: 'test@gmail.com', expiryDate: '09 May 2022' },
            { id: '02', name: 'Ahmed', email: 'ahmed@gmail.com', expiryDate: '10 May 2022' },
            { id: '03', name: 'Mohammad', email: 'mohammad@gmail.com',  expiryDate: '11 May 2022' },
            { id: '04', name: 'Sarah', email: 'sarah@gmail.com', expiryDate: '12 May 2022' },
            { id: '05', name: 'Omar', email: 'omar@gmail.com', expiryDate: '13 May 2022' },
            { id: '06', name: 'Shihabudheen', email: 'test@gmail.com', expiryDate: '09 May 2022' },
            { id: '07', name: 'Ahmed', email: 'ahmed@gmail.com', expiryDate: '10 May 2022' },
            { id: '08', name: 'Mohammad', email: 'mohammad@gmail.com', expiryDate: '11 May 2022' },
            { id: '09', name: 'Sarah', email: 'sarah@gmail.com', expiryDate: '12 May 2022' },
            { id: '10', name: 'Omar', email: 'omar@gmail.com',  expiryDate: '13 May 2022' }
        ],
        'This Year': [
            { id: '01', name: 'Shihabudheen', email: 'test@gmail.com', expiryDate: '09 May 2022' },
            { id: '02', name: 'Ahmed', email: 'ahmed@gmail.com', expiryDate: '10 May 2022' },
            { id: '03', name: 'Mohammad', email: 'mohammad@gmail.com',  expiryDate: '11 May 2022' },
            { id: '04', name: 'Sarah', email: 'sarah@gmail.com', expiryDate: '12 May 2022' },
            { id: '05', name: 'Omar', email: 'omar@gmail.com', expiryDate: '13 May 2022' },
            { id: '06', name: 'Shihabudheen', email: 'test@gmail.com', expiryDate: '09 May 2022' },
            { id: '07', name: 'Ahmed', email: 'ahmed@gmail.com', expiryDate: '10 May 2022' },
            { id: '08', name: 'Mohammad', email: 'mohammad@gmail.com', expiryDate: '11 May 2022' },
            { id: '09', name: 'Sarah', email: 'sarah@gmail.com', expiryDate: '12 May 2022' },
            { id: '10', name: 'Omar', email: 'omar@gmail.com',  expiryDate: '13 May 2022' }
        ]
    };

    const collectionListData = {
        'This Week': [
            { id: '01', name: 'Shihabudheen', email: 'test@gmail.com', amount: '2000', paid: '500', balance: '1500' },
            { id: '02', name: 'Ahmed', email: 'ahmed@gmail.com', amount: '1800', paid: '600', balance: '1200' },
            { id: '03', name: 'Mohammad', email: 'mohammad@gmail.com', amount: '2200', paid: '700', balance: '1500' },
            { id: '04', name: 'Sarah', email: 'sarah@gmail.com', amount: '1500', paid: '800', balance: '700' },
            { id: '05', name: 'Omar', email: 'omar@gmail.com', amount: '2500', paid: '1200', balance: '1300' },
            { id: '06', name: 'Shihabudheen', email: 'test@gmail.com', amount: '2000', paid: '500', balance: '1500' },
            { id: '07', name: 'Ahmed', email: 'ahmed@gmail.com', amount: '1800', paid: '600', balance: '1200' },
            { id: '08', name: 'Mohammad', email: 'mohammad@gmail.com', amount: '2200', paid: '700', balance: '1500' },
            { id: '09', name: 'Sarah', email: 'sarah@gmail.com', amount: '1500', paid: '800', balance: '700' },
            { id: '10', name: 'Omar', email: 'omar@gmail.com', amount: '2500', paid: '1200', balance: '1300' },


        ],
        'This Month': [
            { id: '01', name: 'Shihabudheen', email: 'test@gmail.com', amount: '2000', paid: '500', balance: '1500' },
            { id: '02', name: 'Ahmed', email: 'ahmed@gmail.com', amount: '1800', paid: '600', balance: '1200' },
            { id: '03', name: 'Mohammad', email: 'mohammad@gmail.com', amount: '2200', paid: '700', balance: '1500' },
            { id: '04', name: 'Sarah', email: 'sarah@gmail.com', amount: '1500', paid: '800', balance: '700' },
            { id: '05', name: 'Omar', email: 'omar@gmail.com', amount: '2500', paid: '1200', balance: '1300' },
            { id: '06', name: 'Shihabudheen', email: 'test@gmail.com', amount: '2000', paid: '500', balance: '1500' },
            { id: '07', name: 'Ahmed', email: 'ahmed@gmail.com', amount: '1800', paid: '600', balance: '1200' },
            { id: '08', name: 'Mohammad', email: 'mohammad@gmail.com', amount: '2200', paid: '700', balance: '1500' },
            { id: '09', name: 'Sarah', email: 'sarah@gmail.com', amount: '1500', paid: '800', balance: '700' },
            
        ],
        'This Year': [
            { id: '01', name: 'Shihabudheen', email: 'test@gmail.com', amount: '2000', paid: '500', balance: '1500' },
            { id: '02', name: 'Ahmed', email: 'ahmed@gmail.com', amount: '1800', paid: '600', balance: '1200' },
            { id: '03', name: 'Mohammad', email: 'mohammad@gmail.com', amount: '2200', paid: '700', balance: '1500' },
            { id: '04', name: 'Sarah', email: 'sarah@gmail.com', amount: '1500', paid: '800', balance: '700' },
            { id: '05', name: 'Omar', email: 'omar@gmail.com', amount: '2500', paid: '1200', balance: '1300' },
            { id: '06', name: 'Shihabudheen', email: 'test@gmail.com', amount: '2000', paid: '500', balance: '1500' },
            { id: '07', name: 'Ahmed', email: 'ahmed@gmail.com', amount: '1800', paid: '600', balance: '1200' },
            { id: '08', name: 'Mohammad', email: 'mohammad@gmail.com', amount: '2200', paid: '700', balance: '1500' },
            { id: '09', name: 'Sarah', email: 'sarah@gmail.com', amount: '1500', paid: '800', balance: '700' },
        ]
    };

    // Function to close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (collectionDropdownRef.current && !collectionDropdownRef.current.contains(event.target)) {
                setCollectionDropdownOpen(false);
            }
            if (revenueDropdownRef.current && !revenueDropdownRef.current.contains(event.target)) {
                setRevenueDropdownOpen(false);
            }
            if (expiringDropdownRef.current && !expiringDropdownRef.current.contains(event.target)) {
                setExpiringDropdownOpen(false);
            }
            if (collectionListDropdownRef.current && !collectionListDropdownRef.current.contains(event.target)) {
                setCollectionListDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handlers for each dropdown option selection
    const handleCollectionTimeFrameChange = (option) => {
        setCollectionTimeFrame(option);
        setCollectionDropdownOpen(false);
    };

    const handleRevenueTimeFrameChange = (option) => {
        setRevenueTimeFrame(option);
        setRevenueDropdownOpen(false);
    };

    const handleExpiringTimeFrameChange = (option) => {
        setExpiringTimeFrame(option);
        setExpiringDropdownOpen(false);
    };

    const handleCollectionListTimeFrameChange = (option) => {
        setCollectionListTimeFrame(option);
        setCollectionListDropdownOpen(false);
    };

 
    const Dropdown = ({
        isOpen,
        toggleOpen,
        selectedOption,
        options,
        onSelect,
        dropdownRef
    }) => (
        <div ref={dropdownRef} className="dropdown-container">
            <div className="dropdown" onClick={toggleOpen}>
                <span>{selectedOption}</span>
                <ChevronDown
                    size={16}
                    className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}
                />
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
                            onClick={() => onSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );


    useEffect(() => {
  
        const data = expiringData[expiringTimeFrame];
        setTotalItems(data.length);

     
        setCurrentPage(1);

    
        updatePaginatedData(data, 1);
    }, [expiringTimeFrame]);

    
    const updatePaginatedData = (data, page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedData(data.slice(startIndex, endIndex));
    };

 
    const handlePageChange = (page) => {
        setCurrentPage(page);
        updatePaginatedData(expiringData[expiringTimeFrame], page);
    };

  
    const totalPages = Math.ceil(totalItems / itemsPerPage);

     
    const getPaginationNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };



    const [collectionListCurrentPage, setCollectionListCurrentPage] = useState(1);
    const [collectionListItemsPerPage, setCollectionListItemsPerPage] = useState(5);
    const [collectionListTotalItems, setCollectionListTotalItems] = useState(0);
    const [paginatedCollectionListData, setPaginatedCollectionListData] = useState([]);
    useEffect(() => {
  
        const data = collectionListData[collectionListTimeFrame];
        setCollectionListTotalItems(data.length);

       
        setCollectionListCurrentPage(1);

     
        updatePaginatedCollectionListData(data, 1);
    }, [collectionListTimeFrame]);

   
    const updatePaginatedCollectionListData = (data, page) => {
        const startIndex = (page - 1) * collectionListItemsPerPage;
        const endIndex = startIndex + collectionListItemsPerPage;
        setPaginatedCollectionListData(data.slice(startIndex, endIndex));
    };

  
    const handleCollectionListPageChange = (page) => {
        setCollectionListCurrentPage(page);
        updatePaginatedCollectionListData(collectionListData[collectionListTimeFrame], page);
    };

    
    const collectionListTotalPages = Math.ceil(collectionListTotalItems / collectionListItemsPerPage);
 
    const getCollectionListPaginationNumbers = () => {
        const pages = [];
        for (let i = 1; i <= collectionListTotalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Dashboard Overview</h2>
                <div className="currency-display">
                    <span>Currency</span>
                    <span className="selected-currency">INR</span>
                </div>
            </div>

 
            <div className="users-vendors-section">
                <h2>Users & Venders</h2>
                <div className="stat-cards">
               

                    <div className="stat-card">
                        <div className="icon-box orange">
                            <img src={img3} alt="" />
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Total Users</p>
                            <p className="stat-number">150</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="icon-box purple">
                            <img src={img2} alt="" />
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Active Users</p>
                            <p className="stat-number">70</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="icon-box teal">
                            <img src={img1} alt="" />
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Pending Users</p>
                            <p className="stat-number">25</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="icon-box blue">
                            <img src={img4} alt="" />
                        </div>
                        <div className="stat-info">
                            <p className="stat-label">Expired Users</p>
                            <p className="stat-number">80</p>
                        </div>
                    </div>
                </div>
            </div>

   
            <div className="dual-section">
                <div className="collection-section">
                    <div className="section-header">
                        <h3>Collection <br /> of Subscriptions</h3>
                        <Dropdown
                            isOpen={collectionDropdownOpen}
                            toggleOpen={() => setCollectionDropdownOpen(!collectionDropdownOpen)}
                            selectedOption={collectionTimeFrame}
                            options={timeFrameOptions}
                            onSelect={handleCollectionTimeFrameChange}
                            dropdownRef={collectionDropdownRef}
                        />
                    </div>

                    <div className="collection-content">
                        <div className="collection-item">
                            <div className="collection-label">Total</div>
                            <div className="collection-amount">{collectionData[collectionTimeFrame].total}</div>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${collectionData[collectionTimeFrame].progressPercent}%` }}
                            ></div>
                        </div>
                        <div className="collection-details">
                            <div className="collected">
                                <span className="detail-label">Collected</span>
                                <span className="detail-amount">{collectionData[collectionTimeFrame].collected}</span>
                            </div>
                            <div className="pending">
                                <span className="detail-label">Pending</span>
                                <span className="detail-amount">{collectionData[collectionTimeFrame].pending}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="revenue-section">
                    <div className="section-header">
                        <h3>Revenue Report</h3>
                        <Dropdown
                            isOpen={revenueDropdownOpen}
                            toggleOpen={() => setRevenueDropdownOpen(!revenueDropdownOpen)}
                            selectedOption={revenueTimeFrame}
                            options={timeFrameOptions}
                            onSelect={handleRevenueTimeFrameChange}
                            dropdownRef={revenueDropdownRef}
                        />
                    </div>

                    <div className="chart-wrapper">
              
                        <div className="y-axis">
                            {[300, 250, 200, 150, 100, 50, 0].map((value, index) => (
                                <div key={index} className="y-axis-item">
                                    <span className="y-axis-label">{value}</span>
                                    <div className="grid-line"></div>
                                </div>
                            ))}
                        </div>

                        <div className="chart-container">
                            {revenueData[revenueTimeFrame].map((item, index) => (
                                <div key={index} className="chart-column">
                                    <div
                                        className="income-bar"
                                        style={{
                                            bottom: "0px",
                                            height: `${item.incomeEnd}px`
                                        }}
                                    ></div>
                                    <div
                                        className="expense-bar"
                                        style={{
                                            bottom: "0px",
                                            height: `${item.expenseEnd}px`
                                        }}
                                    ></div>
                                    <div className="chart-label">{item.day}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="chart-legend">
                        <div className="legend-item">
                            <div className="legend-color income"></div>
                            <span>Income</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color expense"></div>
                            <span>Expenses</span>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="dual-section">
                <div className="expiring-section">
                    <div className="section-header padd">
                        <h3>Nearly Expiring Subscriptions</h3>
                        <Dropdown
                            isOpen={expiringDropdownOpen}
                            toggleOpen={() => setExpiringDropdownOpen(!expiringDropdownOpen)}
                            selectedOption={expiringTimeFrame}
                            options={timeFrameOptions}
                            onSelect={handleExpiringTimeFrameChange}
                            dropdownRef={expiringDropdownRef}
                        />
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                
                                    <th>EXPIRY DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                      
                                        <td>{row.expiryDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <span className="pagination-info">
                            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
                        </span>
                        <div className="pagination-controls">
                            <button
                                className="pagination-button"
                                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {getPaginationNumbers().map(page => (
                                <button
                                    key={page}
                                    className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                className="pagination-button"
                                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                <div className="collection-list-section">
                    <div className="section-header padd">
                        <h3>Collection List</h3>
                        <Dropdown
                            isOpen={collectionListDropdownOpen}
                            toggleOpen={() => setCollectionListDropdownOpen(!collectionListDropdownOpen)}
                            selectedOption={collectionListTimeFrame}
                            options={timeFrameOptions}
                            onSelect={handleCollectionListTimeFrameChange}
                            dropdownRef={collectionListDropdownRef}
                        />
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>Email</th>
                                    <th>AMOUNT</th>
                                    <th>PAID</th>
                                    <th>BALANCE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedCollectionListData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.amount}</td>
                                        <td><span className="paid-amount">{row.paid}</span></td>
                                        <td>{row.balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <span className="pagination-info">
                            Showing {((collectionListCurrentPage - 1) * collectionListItemsPerPage) + 1} to {Math.min(collectionListCurrentPage * collectionListItemsPerPage, collectionListTotalItems)} of {collectionListTotalItems} entries
                        </span>
                        <div className="pagination-controls">
                            <button
                                className="pagination-button"
                                onClick={() => collectionListCurrentPage > 1 && handleCollectionListPageChange(collectionListCurrentPage - 1)}
                                disabled={collectionListCurrentPage === 1}
                            >
                                Previous
                            </button>

                            {getCollectionListPaginationNumbers().map(number => (
                                <button
                                    key={number}
                                    className={`pagination-button ${collectionListCurrentPage === number ? 'active' : ''}`}
                                    onClick={() => handleCollectionListPageChange(number)}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                className="pagination-button"
                                onClick={() => collectionListCurrentPage < collectionListTotalPages && handleCollectionListPageChange(collectionListCurrentPage + 1)}
                                disabled={collectionListCurrentPage === collectionListTotalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VDashboard;