import React from 'react';

const Page4 = ({ nextPage, prevPage, goToFirstPage, currentPage, totalPages }) => {
  const currentPageNumber = currentPage + 1;

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center border" style={{ maxWidth: '40vw', minHeight: '100vh', padding: '20px' }}>
      <div className="border p-4 mb-3 w-100">
        <h1>Account Settings</h1>
        <div className="text-center">
          <img src="your-image-url.jpg" alt="Profile" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
        </div>
        <div className="mb-3">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
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

export default Page4;
