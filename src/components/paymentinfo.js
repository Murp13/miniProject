import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import Bold from './boldtext';

const TicketPriceCard = () => {
  const [quantity, setQuantity] = useState(0);
//   const [voucherCode, setVoucherCode] = useState('');
  const [discountPrice, setDiscountPrice] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);

  useEffect(() => {
    // Calculate the total ticket price based on the quantity
    // const totalTicketPrice = quantity * 10; // Assuming each ticket costs $10
    // Calculate the total payment after applying the discount and adding the service fee
    // const totalPayment = totalTicketPrice - discountPrice + serviceFee;
    // setTotalPrice(totalTicketPrice);
    // setTotalPayment(totalPayment);
  }, [quantity, discountPrice, serviceFee]);

  return (
    <ChakraProvider>
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
            <Text as={"b"}>Bayar</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection="column" alignItems="flex-end">
            <Text>Rp {/*{totalTicketPrice}*/}</Text>
              <Text>Rp {discountPrice}</Text>
              <Text>Gratis</Text>
              <Text>Rp {/*{totalPayment}*/}</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default TicketPriceCard;
