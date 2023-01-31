import Transfer from './Routes/Transfer';
import Payment from './Routes/Payment';
import { Route, Routes } from 'react-router-dom';
import Plans from './Routes/Plans';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  
  return (
    <React.Fragment> 
    <ToastContainer autoClose={2000} />
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/plans" element={<Plans />} />
    </Routes>
    </React.Fragment>
  
  );
}

export default App;


