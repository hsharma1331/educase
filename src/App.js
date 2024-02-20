import React, { useState } from 'react';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <Page1 nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />;
      case 1:
        return <Page2 nextPage={nextPage} prevPage={prevPage} goToFirstPage={goToFirstPage} currentPage={currentPage} totalPages={totalPages} />;
      case 2:
        return <Page3 nextPage={nextPage} prevPage={prevPage} goToFirstPage={goToFirstPage} currentPage={currentPage} totalPages={totalPages} />;
      case 3:
        return <Page4 nextPage={nextPage} prevPage={prevPage} goToFirstPage={goToFirstPage} currentPage={currentPage} totalPages={totalPages} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
