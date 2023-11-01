import React from "react";
import { Center, Divider, Box } from "@chakra-ui/react";
import Bold from "../components/boldtext";
import Grey from "../components/greyText";
import Choosecard from "../components/cardstyle2";
import Countertickets from "../components/counterticket"; 
import Checkout from "../components/button";
import Navbar from "../components/Navbar";

function Order() {
  return (
    <>
      <Navbar />
      <Bold text="Judul"></Bold>
      <Grey></Grey>
      <Choosecard type="Reguler" price="RP 70k" date="Penjualan Berakhir: 18 Oktober 2023"/>
      <Choosecard type="VIP" price="RP 300k" date="Penjualan Berakhir: 18 Oktober 2023"/>
      <Choosecard type="VVIP" price="RP 950k" date="Penjualan Berakhir: 18 Oktober 2023"/>

      <Checkout Name="Checkout" size="lg"/>
    </>
  );
}

export default Order;
