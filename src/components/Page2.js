import React from 'react';

const Page2 = ({ nextPage, prevPage, goToFirstPage, currentPage, totalPages }) => {
  const currentPageNumber = currentPage + 1;

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center border" style={{ maxWidth: '40vw', minHeight: '100vh', padding: '20px' }}>
      <div className="border p-4 mb-3 w-100">
        <h1>Signin to your <br /> PopX account</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        <div className="row">
          <div className="col">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" className="form-control mb-2" placeholder="Enter your email" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control mb-2" placeholder="Enter your password" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary w-100">Login</button>
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

export default Page2;
