import React, { useState } from 'react';
import './Receivables.css';
import edit from "../../../assets/images/edit-02.png";
import del from "../../../assets/images/Text.png";

const Receivables = () => {
  const allReceivables = [
    { no: '01', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '02', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '03', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '04', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '05', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '06', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
    { no: '07', name: 'Shihabudheen', email: 'test@gmail.com', vendor: 'Danat Alzaha', amount: '3000', status: 'active' },
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
  const currentReceivables = allReceivables.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allReceivables.length / itemsPerPage);

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
    <div className="receivables-wrapper">
      <h1 className="receivables-title">Receivables</h1>
      
      <div className="receivables-panel">
        <h2 className="receivables-subtitle marrg">List</h2>
        
        <div className="receivables-table-wrapper">
          <table className="receivables-table">
            <thead>
            <tr className='heigg'>
                <th>NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>VENDOR</th>
                <th className='amount'>AMOUNT</th>
                <th>BLOCK</th>
                <th className='edit-column'>EDIT</th>
                <th className='deletes'>DELETE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentReceivables.map((receivable, index) => (
                <tr  className='heigg' key={index}>
                  <td>{receivable.no}</td>
                  <td>{receivable.name}</td>
                  <td>{receivable.email}</td>
                  <td>{receivable.vendor}</td>
                  <td>{receivable.amount}</td>
                  
                  <td>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked={receivable.status !== 'Inactive'} />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <button className="icon-buttonss receivables-edit-btn">
                      <img src={edit} alt="Edit" />
                    </button>
                  </td>
                  <td  >
                  <button className="icon-buttonss delete-button">
                      <img src={del} alt="Delete" />
                    </button>
                  </td>
                  <td>
                    <button className="receivables-payment-btn">
                      Make Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="receivables-pagination">
          <div className="receivables-page-info">
            Showing 1 to {Math.min(indexOfLastItem, allReceivables.length)} of {allReceivables.length} entries
          </div>
          <div className="receivables-page-controls">
            <button 
              className="receivables-page-btn" 
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                className={`receivables-page-btn ${currentPage === number ? 'receivables-active' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
            
            <button 
              className="receivables-page-btn" 
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

export default Receivables;