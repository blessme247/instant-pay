import Transfer from './Routes/Transfer';
import Payment from './Routes/Payment';
import { Route, Routes } from 'react-router-dom';

// RCP_jhmt081kpx5ug2i recipient_code
// RCP_tadggk6l0uwykce Dimeji recipient code 

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/transfer" element={<Transfer />} />
    </Routes>
  
  );
}

export default App;


