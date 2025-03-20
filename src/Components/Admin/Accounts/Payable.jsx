import React, { useState } from 'react';
import './Payable.css';
import edit from "../../../assets/images/edit-02.png";
import del from "../../../assets/images/Text.png";

const Payable = () => {
  const allPayables = [
    { no: '01', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '02', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '03', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '04', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '05', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '05', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '05', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '05', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '06', description: 'Shihabudheen', amount: '30000', status: 'active' },
    { no: '07', description: 'Shihabudheen', amount: '30000', status: 'active' },
  ];
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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayables = allPayables.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allPayables.length / itemsPerPage);

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
    <div className="payables-wrapper">
      <h1 className="payables-title">Payables</h1>
      
      <div className="payables-panel">
        <h2 className="payables-subtitle marrg">List</h2>
        
        <div className="payables-table-wrapper">
          <table className="payables-table">
            <thead>
            <tr className='heigg'>
                <th>NO</th>
                <th>DESCRIPTION</th>
                <th className='amount'>AMOUNT</th>
                <th>BLOCK</th>
                <th className='edit-column'>EDIT</th>
                <th className='deletes'>DELETE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentPayables.map((payable, index) => (
                <tr className='heigg' key={index}>
                  <td>{payable.no}</td>
                  <td>{payable.description}</td>
                  <td>{payable.amount}</td>
                  <td>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked={payable.status !== 'Inactive'} />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td className='eddt'>
                    <button className="icon-buttonss edit-button">
                      <img src={edit} alt="Edit" />
                    </button>
                  </td>
                  <td>
                    <button className="icon-buttonss delete-button">
                      <img src={del} alt="Delete" />
                    </button>
                  </td>
                  <td>
                    <button className="payables-payment-btn">
                      Make Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="payables-pagination">
          <div className="payables-page-info">
            Showing 1 to {Math.min(indexOfLastItem, allPayables.length)} of {allPayables.length} entries
          </div>
          <div className="payables-page-controls">
            <button 
              className="payables-page-btn" 
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                className={`payables-page-btn ${currentPage === number ? 'payables-active' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
            
            <button 
              className="payables-page-btn" 
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

export default Payable;