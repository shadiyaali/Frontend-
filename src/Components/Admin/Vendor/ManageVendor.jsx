import React, { useState, useEffect } from 'react';
import './ManageVendor.css';
import view from "../../../assets/images/view.png";
import edit from "../../../assets/images/edit-02.png";
import del from "../../../assets/images/Text.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from '../../../Utils/config'; 

const ManageVendor = () => {
    const navigate = useNavigate();
    
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalVendors, setTotalVendors] = useState(0);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}/nfc/vendors/`);
                setVendors(response.data);
                setTotalVendors(response.data.length);
                setLoading(false);
            } catch (err) {
                alert('Failed to fetch vendors');
                setLoading(false);
                console.error('Error fetching vendors:', err);
            }
        };

        fetchVendors();
    }, []);

    // Calculate pagination values
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVendors = vendors.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(totalVendors / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle previous and next buttons
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Handle vendor status toggle with confirmation
    const handleStatusToggle = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Active' ? 'Block' : 'Active';
        const confirmMessage = newStatus === 'Block' 
            ? 'Are you sure you want to block this vendor?' 
            : 'Are you sure you want to activate this vendor?';
            
        if (window.confirm(confirmMessage)) {
            try {
                await axios.patch(`${BASE_URL}/nfc/vendors/${id}/`, { status: newStatus });
                
                // Update the local state
                setVendors(vendors.map(vendor => 
                    vendor.id === id ? { ...vendor, status: newStatus } : vendor
                ));
            } catch (err) {
                console.error('Error updating vendor status:', err);
                alert('Failed to update vendor status');
            }
        }
    };

    // Handle vendor deletion
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this vendor?')) {
            try {
                await axios.delete(`${BASE_URL}/nfc/vendors/${id}/`);
                setVendors(vendors.filter(vendor => vendor.id !== id));
                setTotalVendors(totalVendors - 1);
            } catch (err) {
                console.error('Error deleting vendor:', err);
                alert('Failed to delete vendor');
            }
        }
    };

    if (loading) return <div className="loading">Loading vendors...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="manage-vendor-container">
            <h1 className="page-title">Manage Vendor</h1>

            <div className="vendor-card">
                <h2 className="vendor-list-title">Vendor List</h2>

                <div className="table-container">
                    <table className="vendor-table">
                        <thead>
                            <tr className='heigg'>
                                <th>NO</th>
                                <th>VENDOR NAME</th>
                                <th>EMAIL</th>
                                <th>COUNTRY</th>
                                <th>STATUS</th>
                                <th>BLOCK</th>
                                <th className='view-column'>VIEW</th>
                                <th className='edit-column'>EDIT</th>
                                <th className='dele-column'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentVendors.map((vendor, index) => (
                                <tr className='heigg' key={vendor.id}>
                                    <td>{indexOfFirstItem + index + 1}</td>
                                    <td>{vendor.vendor_name}</td>
                                    <td>{vendor.email}</td>
                                    <td>{vendor.country}</td>
                                    <td>
                                        <span className={`status-${vendor.status.toLowerCase()}`}>
                                            {vendor.status}
                                        </span>
                                    </td>
                                    <td>
                                        <label className="toggle-switch-vendor">
                                            <input 
                                                type="checkbox" 
                                                checked={vendor.status === 'Active'} 
                                                onChange={() => handleStatusToggle(vendor.id, vendor.status)}
                                            />
                                            <span className={`slider-v round-v ${vendor.status === 'Active' ? 'active-slider-v' : 'blocked-slider-v'}`}></span>
                                        </label>
                                    </td>
                                    <td className='vieww'>
                                        <button 
                                            className="icon-buttonss view-button"
                                            onClick={() => navigate(`/view-vendor/${vendor.id}`)}
                                        >
                                            <img src={view} alt="View" />
                                        </button>
                                    </td>
                                    <td className='eddt'>
                                        <button
                                            className="icon-buttonss edit-button"
                                            onClick={() => navigate(`/edit-vendor/${vendor.id}`)}
                                        >
                                            <img src={edit} alt="Edit" />
                                        </button>
                                    </td>
                                    <td className='delee'>
                                        <button 
                                            className="icon-buttonss delete-button"
                                            onClick={() => handleDelete(vendor.id)}
                                        >
                                            <img src={del} alt="Delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination-container">
                    <div className="pagination-info">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalVendors)} of {totalVendors} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            className="pagination-button"
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </button>
                        ))}

                        <button
                            className="pagination-button"
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageVendor;