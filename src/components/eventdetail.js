import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Heading, Stack, Text, Button, Image, Flex } from '@chakra-ui/react'
import foto from '../Asset/d.jpg'
import {FaLocationDot} from 'react-icons/fa6'
import {MdDateRange} from 'react-icons/md'
import {BiSolidTime} from 'react-icons/bi'

function Buyingcard() {
    return(
    <>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    transition="transform 0.2s" 
    _hover={{ 
        borderWidth: 3 , 
        borderColor: "blue.500" ,
      transform: 'scale(1.05)',
      boxShadow: 'xl', 
    }}
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={foto} 
        alt="Event Photo"
     
    />

    <Stack>
      <CardBody>
        <Heading size='md'>Nama Event</Heading>
        <Flex alignItems="center">
            <MdDateRange />
            <Text py='1' color={"grey"} marginLeft={1} size='sm'>Tanggal</Text>
          </Flex>
          <Flex alignItems="center">
          <BiSolidTime />
            <Text py='1' color={"grey"} marginLeft={1} size='sm'>Jam</Text>
          </Flex>
          <Flex alignItems="center">
          <FaLocationDot />
            <Text py='1' color={"grey"} marginLeft={1} size='sm'>Lokasi</Text>
          </Flex>
        </CardBody>

    </Stack>
    </Card>
</>
)
}

export default Buyingcard;