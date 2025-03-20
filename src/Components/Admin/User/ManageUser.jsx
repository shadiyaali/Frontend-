import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageUser.css';
import view from "../../../assets/images/view.png";
import edit from "../../../assets/images/edit-02.png";
import del from "../../../assets/images/Text.png";

import { BASE_URL } from '../../../Utils/config';
const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/nfc/users/`)
      .then(response => {
        setUsers(response.data);
        console.log("rescd",response.data)
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'status-active';
      case 'pending': return 'status-pending';
      case 'block': return 'status-inactive';
      default: return '';
    }
  };
  const handleStatusToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Block' : 'Active';
    const confirmMessage = newStatus === 'Block' 
        ? 'Are you sure you want to block this User?' 
        : 'Are you sure you want to activate this User?';
        
    if (window.confirm(confirmMessage)) {
        try {
            await axios.patch(`${BASE_URL}/nfc/users/${id}/`, { status: newStatus });
            
         
            setUsers(users.map(user => 
                user.id === id ? { ...user, status: newStatus } : user
            ));
        } catch (err) {
            console.error('Error updating User status:', err);
            alert('Failed to update User status');
        }
    }
};
  return (
    <div className="manage-user-container">
      <h1 className="page-title">Manage Users</h1>
      {loading ? <p>Loading...</p> : (
        <div className="user-card">
          <h2 className="user-list-title">Users List</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr className='heigg'>
                  <th>NO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>VENDOR</th>
                  <th>STATUS</th>
                  <th>BLOCK</th>
                  <th>VIEW</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr className='heigg' key={user.id}>
                    <td>{index + 1 + indexOfFirstItem}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.vendor?.name || 'N/A'}</td>
                    <td>
                      <span className={`status-${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <label className="toggle-switch-user">
                        <input
                          type="checkbox"
                          checked={user.status === 'Active'}
                          onChange={() => handleStatusToggle(user.id, user.status)}
                        />
                        <span className={`slider-u round-u ${user.status === 'Active' ? 'active-slider-u' : 'blocked-slider-u'}`}></span>
                      </label>
                    </td>
                    <td>
                      <button className="icon-buttonss view-button">
                        <img src={view} alt="View" />
                      </button>
                    </td>
                    <td>
                      <button className="icon-buttonss edit-button"
                      >
                        <img src={edit} alt="Edit" />
                      </button>
                    </td>
                    <td>
                      <button className="icon-buttonss delete-button">
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
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, users.length)} of {users.length} entries
            </div>
            <div className="pagination-controls">
              <button className="pagination-button" onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i + 1} className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`} onClick={() => paginate(i + 1)}>{i + 1}</button>
              ))}
              <button className="pagination-button" onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUser;
