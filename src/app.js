import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router components
import Home from './routes/home'; // Assuming you have a Home component in routes folder
import EmailForm from './components/emailForm'; // Assuming you have an EmailForm component
import About from './routes/about';  // Adjust the path based on your folder structure


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<EmailForm />} />
        <Route path="/about" element={<About />} />
      </Routes>


    </div>
  );
};

export default App;
