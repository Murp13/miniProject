import React from 'react';
import { Center, Card, CardBody, StackDivider, Box, Button, Text, Divider, Stack, Heading, Flex } from '@chakra-ui/react';
import {FaLocationDot} from 'react-icons/fa6'
import {MdDateRange} from 'react-icons/md'
import {BiSolidTime} from 'react-icons/bi'
import Checkout from './button';


function TicketView() {
  return (
    <Center>
    <Stack direction='column' alignItems='center' spacing={4}>
      <Card divider={<StackDivider borderColor={'alphaBlack.400'} alignItems={'center'} />} mt={"30"} maxWidth={"400px"}mb={'10px'}>
        <CardBody bg="white" borderRadius="lg" boxShadow="lg">
          <Stack spacing={8} direction='row' my={"10px"} display='flex' justifyContent='space-between' alignItems='center' width='100%'>
            <Box>
              <Heading mb={4}>Terima Kasih!</Heading>
              <Divider size="lg" variant="thick" colorScheme="brand" />
              <Text color='green'  fontWeight="bold">#Transaction Code</Text>
            </Box>
          </Stack>
          <Button colorScheme='blue' size='sm' p={2}>
            View Ticket
          </Button>
          <Box pt={2} pb={2}>
            <Text as={'b'}>Nama Event</Text>
          </Box>

          <Box pt={1} pb={1}>
          <Flex alignItems="center">
            <MdDateRange />
            <Text marginLeft={2}>Tanggal</Text>
          </Flex>
          </Box>
          <Box pt={1} pb={1}>
          <Flex alignItems="center">
            <FaLocationDot />
            <Text marginLeft={2}>Lokasi</Text>
          </Flex>
          </Box>
          <Box pt={1} pb={1}>
          <Flex alignItems="center">
            <BiSolidTime />
            <Text marginLeft={2}>Jam</Text>
          </Flex>
          </Box>
          <Box pt={2}>
            <Text style={{ color: 'grey' }}  fontWeight="extrabold">
              #Referral Code
              <br />
              <Text as='samp' fontSize={"xs"}  fontWeight="bold">Pakai Kode ini Agar Mendapatkan Potongan Harga</Text>
            </Text>
          </Box>
        </CardBody>
      </Card>
      <Checkout Name="Kembali ke Home" size="md" />
    </Stack>
  </Center>
  );
}

export default TicketView;
