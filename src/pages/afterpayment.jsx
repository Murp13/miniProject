// page abis bayar
// Route ke transaction page

// import {  ChakraProvider } from "@chakra-ui/react";
// import Bold from "../components/boldtext";
// import Grey from "../components/greyText";
// import Choosecard from "../components/cardstyle2";
// import Countertickets from "../components/counterticket"; 
// import Checkout from "../components/button";
// import Navbar from "../components/Navbar";

import React from "react";
import TicketView from "../components/viewticket";
import Footer from "../components/footer";

function AfterPayment() {
  return (
    <>

     <TicketView />
     <Footer  />
     </>

  );
}

export default AfterPayment;
