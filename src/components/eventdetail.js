import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Heading, Stack, Text, Button, Image, Flex } from '@chakra-ui/react'
import foto from '../Asset/d.jpg'
import { FaLocationDot } from 'react-icons/fa6'
import { MdDateRange } from 'react-icons/md'
import { BiSolidTime } from 'react-icons/bi'

function Buyingcard(props) {
  console.log('Received props:', props);
  console.log('eventName:', props.eventName); 
  console.log('eventDate:', props.eventDate); 
  console.log('eventTime:', props.eventTime); 
  console.log('eventLocation:', props.eventLocation);
  return (
    <>
       <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        transition="transform 0.2s"
        _hover={{
          borderWidth: 3,
          borderColor: "teal.500",
          transform: 'scale(1.025)',
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
            <Heading size='md' pb={2}>{props.eventName}</Heading>
            <Flex alignItems="center">
              <MdDateRange />
              <Text  color={"grey"} marginLeft={1} size='sm'>{props.eventDate}</Text>
            </Flex>
            <Flex alignItems="center">
              <BiSolidTime />
              <Text  color={"grey"} marginLeft={1} size='sm'>{props.eventTime}</Text>
            </Flex>
            <Flex alignItems="center">
              <FaLocationDot />
              <Text  color={"grey"} marginLeft={1} size='sm'>{props.eventLocation}</Text>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </>
  )
}

export default Buyingcard;
