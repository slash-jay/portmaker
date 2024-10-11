import React, { useState } from 'react';
import PortfolioForm from './components/PortfolioForm';
import PortfolioDisplay from './components/PortfolioDisplay';

const App = () => {
  const [formData, setFormData] = useState(null); // State to hold form data

  const handleFormSubmit = (data) => {
    setFormData(data); // Store form data when submitted
  };

  return (
    <div className="App">
      {!formData ? (
        <PortfolioForm onSubmit={handleFormSubmit} /> // Pass the function as prop
      ) : (
        <PortfolioDisplay formData={formData} />
      )}
    </div>
  );
};

export default App;
