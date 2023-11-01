import React from 'react';
import { ChakraProvider, Stack, Box, Text, StackDivider, Center, Card, CardHeader, CardBody, ButtonGroup, Spacer } from '@chakra-ui/react';
import { Infocard, Priceinfo, Qtyinfo } from '../components/infoticket';
import VoucherValidationCard from '../components/vouchervalid';
import Buyingcard from '../components/eventdetail';
import Bold from '../components/boldtext';
import TicketPriceCard from '../components/paymentinfo';
import BackButton from '../components/backbutton';
import Checkout from '../components/button';
import Footer from '../components/footer';

function Ordersummary() {
  return (
    <>
      <Center>
        <Card
          divider={<StackDivider borderColor={'alphaBlack.400'} alignItems={"center"} />}
          direction='column'
          alignItems='center'
          bg="white" p={4} borderRadius="lg" boxShadow="lg"
        >
          <CardHeader textAlign={'left'} style={{ marginTop: '10px' }}>
            <Bold Text="Detail Pemesanan" />
          </CardHeader>
          <CardBody>
            <Box>
              <Stack direction='column' spacing='24px'>
                <Buyingcard />
                <Box>
                  <Infocard />
                </Box>
                <Box>
                  <Priceinfo />
                </Box>
                <Box>
                  <Qtyinfo />
                </Box>
              </Stack>
            </Box>
            <Box>
              <VoucherValidationCard />
            </Box>
            <Box>
              <TicketPriceCard />
            </Box>
            <div style={{ marginTop: '20px' }}> 
              <Stack direction={"row"} spacing={2}>
                <BackButton />
                <Spacer />
                <Checkout Name="Lanjut" size="md" />
              </Stack>
            </div>
          </CardBody>
        </Card>
      </Center>
      {/* <Footer /> */}
</>
  );
}

export default Ordersummary;
