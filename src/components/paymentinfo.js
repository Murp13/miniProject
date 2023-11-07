import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import formatPriceToIDR from '../utils/priceFormat';

const TicketPriceCard = ({ ticketData }) => {
  const discount = 8000; // Fixed discount value
  const serviceFee = 0; // Fixed service fee value

  const [totalTicketPrice, setTotalTicketPrice] = useState(0);

  useEffect(() => {
    if (ticketData && ticketData.length > 0) {
      const totalPrice = ticketData.reduce(
        (total, ticket) => total + ticket.quantity * ticket.price,
        0
      );
      setTotalTicketPrice(totalPrice);
    }
  }, [ticketData]);

  // Calculate the totalPayment
  const totalPayment = totalTicketPrice - discount + serviceFee;

  // Format the totalTicketPrice and totalPayment using formatPriceToIDR
  const fTotalTicketp = formatPriceToIDR(totalTicketPrice);
  const fTotalPay = formatPriceToIDR(totalPayment);
  const fDiscount = formatPriceToIDR(discount);

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m="auto"
      mt={4}
      boxShadow="lg"
    >
      <Text fontSize="lg" as="b" mb={4}>
        Informasi Tiket
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Text>Jumlah Harga Tiket</Text>
          <Text>Potongan</Text>
          <Text>Biaya Layanan</Text>
          <Text as="b">Bayar</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex flexDirection="column" alignItems="flex-end">
            <Text>{fTotalTicketp}</Text>
            <Text>{fDiscount}</Text>
            <Text>Gratis</Text>
            <Text as='b'>{fTotalPay}</Text> 
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TicketPriceCard;
