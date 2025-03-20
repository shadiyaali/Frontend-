import React, { useState } from 'react';
import './ManageSubscriber.css';
import view from "../../../assets/images/view.png";
import edit from "../../../assets/images/edit-02.png";
import del from "../../../assets/images/Text.png";

const ManageSubscriber = () => {
   
  // Updated subscriber data to match the screenshot
  const allSubscribers = [
    { no: '01', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '02', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '03', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '04', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '06', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
    { no: '07', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaina', subscription: '3 Months', expiryDate: '09 May 2022', status: 'Pending' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSubscribers = allSubscribers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allSubscribers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
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

  // Function to get status class based on status value
  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'pending':
        return 'status-pending';
      case 'inactive':
        return 'status-inactive';
      default:
        return '';
    }
  };

  return (
    <div className="manage-subscriber-container">
      <h1 className="page-title">Manage Subscribers</h1>
      
      <div className="subscriber-card">
        <h2 className="subscriber-list-title ">Subscribers List</h2>
        
        <div className="table-container">
          <table className="subscriber-table">
            <thead>
              <tr className='heigg'>
                <th>NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>VENDOR</th>
                <th>SUBSCRIPTION</th>
                <th>EXPIRY DATE</th>
                <th>STATUS</th>
                <th>BLOCK</th>
                <th className='view-t'>VIEW</th>
                <th className='edit-t'>EDIT</th>
                <th className='delete-t'>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {currentSubscribers.map((subscriber, index) => (
                <tr className='heigg' key={index}>
                  <td>{subscriber.no}</td>
                  <td>{subscriber.name}</td>
                  <td>{subscriber.email}</td>
                  <td>{subscriber.vendor}</td>
                  <td>{subscriber.subscription}</td>
                  <td>{subscriber.expiryDate}</td>
                  <td>
                    <span className={getStatusClass(subscriber.status)}>{subscriber.status}</span>
                  </td>
                  <td>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked={subscriber.status !== 'Inactive'} />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td className='vieew'>
                    <button className="icon-buttonss view-button">
                      <img src={view} alt="View" />
                    </button>
                  </td>
                  <td className='eddit'>
                    <button className="icon-buttonss edit-button">
                      <img src={edit} alt="Edit" />
                    </button>
                  </td>
                  <td className='delee'>
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
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, allSubscribers.length)} of {allSubscribers.length} entries
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

export default ManageSubscriber;