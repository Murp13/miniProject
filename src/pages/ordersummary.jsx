import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, Text, StackDivider, Center, Card, CardHeader, CardBody, ButtonGroup, Spacer } from '@chakra-ui/react';
import Axios from "axios";

import Buyingticket from '../components/infoticket';
import VoucherValidationCard from '../components/vouchervalid';
import Buyingcard from '../components/eventdetail';
import detailPemesanan from "../server/eventInfo.json" 

import TicketPriceCard from '../components/paymentinfo';
import BackButton from '../components/backbutton';
import Checkout from '../components/button';

import Footer from '../components/footer';
// import Bold from '../components/boldtext';
import Boldheader from '../components/boldheader';
import formatPriceToIDR from '../utils/priceFormat';
import ActionOrderSummary from '../utils/actionOrderSummary';


function Ordersummary() {
  // console.log('detailPemesanan');
  ActionOrderSummary();
  const [eventData, setEventData] = useState({});
  const [ticketData, setTicketData] = useState([]);
  const eventInfo = detailPemesanan.eventInfo;

  useEffect(() => {

    Axios.get('http://localhost:3002/eventInfo')
      .then((response) => {
        // console.log('Received event data:', response.data); 
        setEventData(response.data);
        // console.log('Updated eventData:', eventData);
      })
      .catch((error) => {
        console.error('Error fetching event data: ', error);
      });

    Axios.get('http://localhost:3001/ticketClasses')
      .then((response) => {
        // console.log('Received ticket data:', response.data);
        setTicketData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ticket data: ', error);
      });
  }, []);

// console.log('eventData:', eventData);
// console.log('ticketData:', ticketData);

// const isEventLoaded = eventData.length > 0;
const isTicketLoaded = ticketData.length > 0;


function renderBuyingCard(eventData) {
  if (eventData.length > 0) {
    return (
      <Buyingcard
        eventName={eventData[0].eventName}
        eventDate={eventData[0].eventDate}
        eventTime={eventData[0].eventTime}
        eventLocation={eventData[0].eventLocation}
      />
    );
  } else {
    return <Text>Loading event data...</Text>;
  }
}
function renderBuyingTickets(ticketData) {
  if (isTicketLoaded === true) {
    const price = formatPriceToIDR({ticketData})
    return ticketData.map((ticket, index) => (
      <Buyingticket
        type={ticket.type}
        qty={ticket.quantity}
        price={formatPriceToIDR(ticket.price)}
        key={index}
      />
    ));
  } else {
    return <Text>Loading ticket data...</Text>;
  }
}
  return (
    <>
      <Center>
        <Card
          divider={<StackDivider borderColor={'alphaBlack.400'} alignItems={"center"} />}
          direction='column'
          alignItems='center'
          bg="none" p={4} borderRadius="lg" boxShadow="lg"
        >
          <CardHeader textAlign={'left'} style={{ marginTop: '10px' }}>
            <Boldheader Text="Detail Pemesanan"  />
          </CardHeader> 
          <CardBody>
          <Box>
              {renderBuyingCard(eventData)}
            </Box>
            <Box my={2}>
              {renderBuyingTickets(ticketData)}
            </Box>
            <Box>
              <VoucherValidationCard />
            </Box>
            <Box>
            <TicketPriceCard  ticketData={ticketData} />
            </Box>
            <Box style={{ marginTop: '20px' }}> 
              <Stack direction={"row"} spacing={2}>
                <BackButton />
                <Spacer />
                <Checkout Name="Lanjut" size="md" />
              </Stack>
            </Box>
          </CardBody> 
         </Card>
      </Center>
      <Footer />
    </>
  );
}


export default Ordersummary;
