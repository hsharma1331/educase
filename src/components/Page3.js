import React from 'react';

const Page3 = ({ nextPage, prevPage, goToFirstPage, currentPage, totalPages }) => {
  const currentPageNumber = currentPage + 1;

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center border" style={{ maxWidth: '40vw', minHeight: '100vh', padding: '20px' }}>
      <div className="border p-4 mb-3 w-100">
        <h1>Create your <br />PopX account</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="input1">Full Name:</label>
            <input type="text" id="input1" className="form-control" placeholder="Full name" />
          </div>
          <div className="col">
            <label htmlFor="input2">Phone no:</label>
            <input type="text" id="input2" className="form-control" placeholder="Enter Phone no" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="input3">Email address:</label>
            <input type="text" id="input3" className="form-control" placeholder="Enter Email address" />
          </div>
          <div className="col">
            <label htmlFor="input4">Password:</label>
            <input type="text" id="input4" className="form-control" placeholder="Enter Password" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="input5">Company name:</label>
            <input type="text" id="input5" className="form-control" placeholder="Enter Company name" />
          </div>
        </div>
        Are you an Agency ?
        <div className="form-check mb-3">
          <input className="form-check-input" type="radio"name='radio' value="option1" />
            Yes
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="radio"name='radio'value="option2" />
            No
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-success w-100">Create Account</button>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-between mt-auto">
        <i class="bi bi-house-door-fill" onClick={goToFirstPage}></i>
                <i class="bi bi-caret-left-fill" onClick={prevPage}></i>
        <span>Page {currentPageNumber} of {totalPages}</span>
        <i class="bi bi-caret-right-fill" onClick={nextPage}></i>
      </div>
    </div>
  );
};

export default Page3;
