import './App.css';
import { Button, ChakraProvider, CSSReset, extendTheme, OrderedList, ThemeProvider, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Checkout from './components/button';
// import Buyingcard from './components/eventdetail';
// import Countertickets from './components/counterticket';
// import Choosecard from './components/cardstyle2';
import Order from './pages/order';
// import Bold from './components/boldtext';
// import Grey from './components/greyText';
// import {Infocard, Priceinfo, Qtyinfo} from './components/infoticket';
// import VoucherValidationCard from './components/vouchervalid';
// import TicketPriceCard from './components/paymentinfo';
// import BackButton from './components/backbutton';
import Ordersummary from './pages/ordersummary';
import Transaction from './pages/transaction';
import AfterPayment from './pages/afterpayment';
import Navbar from './components/Navbar';
import UploadImage from './pages/upload';




const theme = extendTheme({
  // Customize Chakra UI theme .
});

function App() {
  return (
    <> 
        <div className='App'>
          <Navbar />
          <Routes>  
          <Route path="/" />
          <Route path="/order-summary" element={<Ordersummary/>} /> 
          <Route path="/e-ticket" element={<AfterPayment/>} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/upload" element={<UploadImage/>} />
          </Routes> 
          </div>

    </>
  );
}

export default App;

{/* <ThemeProvider> */}
{/* theme={theme} */}
{/* <CSSReset /> */}
{/* <Infocard type="Presale 1"/>
<Priceinfo price="45000" />
<Qtyinfo qty="1"/> */}
{/* <BackButton /> */}
{/* <Ordersummary /> */}
{/* <AfterPayment /> */}
{/* <TicketPriceCard /> */}
{/* </ThemeProvider> */}