import React from 'react';

const Page1 = ({ nextPage, prevPage, goToFirstPage, currentPage, totalPages }) => {
  const currentPageNumber = currentPage + 1;

  return (
    <div className="container d-flex flex-column justify-content-end align-items-center border" style={{ maxWidth: '40vw', height: '100vh', padding: '20px' }}>
      <div className="border p-4 mb-3 w-100">
        <h1>Welcome to PopX</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary w-100">Create Account</button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-success w-100">Already Registered? Login</button>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-between mt-3">
        <i class="bi bi-house-door-fill" onClick={goToFirstPage}></i>
        <i class="bi bi-caret-left-fill" onClick={prevPage}></i>
        <span>Page {currentPageNumber} of {totalPages}</span>
        <i class="bi bi-caret-right-fill" onClick={nextPage}></i>
      </div>
    </div>
  );
};

export default Page1;
