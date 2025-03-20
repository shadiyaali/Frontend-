import React, { useState } from 'react';
import './Managesubscription.css';
import edit from "../../../assets/images/edit-02.png";
import del from "../../../assets/images/Text.png";

const ManageSubscriptions = () => {
  const allPlans = [
    { no: '01', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '02', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '03', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '04', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '05', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '06', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '07', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '08', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '09', planName: 'Shihabudheen', duration: '3 Months' },
    { no: '10', planName: 'Shihabudheen', duration: '3 Months' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlans = allPlans.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allPlans.length / itemsPerPage);

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

  return (
    <div className="subscriptions-container">
      <h1 className="subscriptions-title">Manage Subscriptions</h1>
      
      <div className="plan-list-card">
        <h2 className="plan-list marrg">List Plan</h2>
        
        <div className="plan-table-container">
          <table className="plan-table ">
            <thead>
              <tr className='heigg'>
                <th>NO</th>
                <th>PLAN NAME</th>
                <th>DURATION</th>
                <th className='edit-t'>EDIT</th>
                <th className='delete-t'>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {currentPlans.map((plan, index) => (
                <tr className='heigg'  key={index}>
                  <td>{plan.no}</td>
                  <td>{plan.planName}</td>
                  <td>{plan.duration}</td>
                  <td className='eddt'>
                    <button className="icon-buttonss edit-action">
                        <img src={edit} alt="Edit" />
                    </button>
                  </td>
                  <td className='delee' >
                    <button className="icon-buttonss delete-action">
                      <img src={del} alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="pagination-wrapper">
          <div className="entries-info">
            Showing 1 to {Math.min(indexOfLastItem, allPlans.length)} of {allPlans.length} entries
          </div>
          <div className="pagination-buttons">
            <button 
              className="page-nav-button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                className={`page-number-button ${currentPage === number ? 'active-page' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
            
            <button 
              className="page-nav-button"
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

export default ManageSubscriptions;