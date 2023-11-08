import React from 'react';
import { Center, Card, CardBody, StackDivider, Box, Button, Text, Divider, Stack, Heading, Flex, HStack, VStack } from '@chakra-ui/react';
// import { FaLocationDot } from 'react-icons/fa6';
// import { MdDateRange } from 'react-icons/md';
// import { BiSolidTime } from 'react-icons/bi';
import Checkout from './button';


function TicketView() {
      
  return (
    <Center>
      <Stack direction='column' alignItems='center' spacing={4}>
        <Card divider={<StackDivider borderColor={'grey'} />} mt={"30"} maxWidth={"600px"} mb={'10px'}>
          <CardBody bg="white" borderRadius="lg" boxShadow="lg">
            <Stack spacing={8} direction='row' my="16px" display='flex' justifyContent='space-between' alignItems='center' width='100%'>
              <Box>
                <Heading mb={4}>Terima Kasih!</Heading>
                <Divider size="lg" variant="thick" colorScheme="brand" opacity={0.5} borderColor="grey" />
                <Text color='green' fontWeight="bold">Order #(Number Transaction)</Text>
              </Box>
              {/* <Box>
                <Text color='green' fontWeight="bold">Completed</Text>
              </Box> */}
            </Stack>

            <Box pt={2}>
              <Text fontWeight="bold">Order By (database)</Text>
            </Box>
            <Box pt={1} pb={1}>
              <Text>Name:</Text>
            </Box>
            <Box pt={1} pb={1}>
              <Text>Email:</Text>
            </Box>

            <Divider opacity={0.5} borderColor="grey" />

            <HStack spacing={4}>
              <VStack align="start">
                <Box pt={1} pb={1}>
                  <Text fontWeight="bold">Items (database)</Text>
                  <Text> 1 x reguler</Text>
                </Box>
              </VStack>
              
              <Divider opacity={0.5} borderColor="grey" orientation='vertical' />

              <VStack align="start">
                <Box pt={1} pb={1}>
                  <Text fontWeight="bold"> Total Billing</Text>
                  <Text>Rp 115.000,00</Text>
                </Box>
              </VStack>
            </HStack>

            <Divider opacity={0.5} borderColor="grey" />

            <Box pt={2}>
              <Text style={{ color: 'grey' }} fontWeight="extrabold">#Referral Code</Text>
              <Text as='samp' fontSize={"xs"} fontWeight="bold">Pakai Kode ini Agar Mendapatkan Potongan Harga</Text>
            </Box>
          </CardBody>
        </Card>
        <Button colorScheme='blue' size='sm' p={2}>
          View Ticket
        </Button>
        <Button colorScheme='orange' size="md" mb= '5rem'>Kembali he Home</Button> 
      </Stack>
    </Center>
  );
}

export default TicketView;
