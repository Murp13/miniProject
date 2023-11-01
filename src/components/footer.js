import React from "react";
import { Box, Grid, GridItem, VStack, Text } from "@chakra-ui/react";
import {GiTicket} from "react-icons/gi"
import "../CSS/Footer.css"

const Footer = ({ marginTop }) => {
  return (
    <Box mt={marginTop || "31px"} bg={"white"} height={"100px"}>
      <Grid templateColumns={"repeat(4, 1fr)"} bg={"#032466"} gap={10}>
        <GridItem  bg={"red"} ml={"100px"}>
          <VStack color={"#F6F4F1"}>
            <Text
              mt={"10px"}
              mb={"30px"}
              color={"white"}
              fontSize={"20px"}
              fontWeight={700}
            >
              {" "}
              TicketZone{" "}
            </Text>
            <GiTicket fontSize={"70px"}/>
           
          </VStack>
        </GridItem>
        <GridItem>
          <VStack color={"#F6F4F1"}>
            <Text
              mt={"10px"}
              mb={"30px"}
              color={"white"}
              fontSize={"20px"}
              fontWeight={700}
            >
              {" "}
              Tentang TicketZone{" "}
            </Text>
            <Text fontWeight={500} fontSize={"13px"}> Masuk </Text>
            <Text fontWeight={500} fontSize={"13px"}> Lihat Event </Text>
            <Text fontWeight={500} fontSize={"13px"}> FAQ </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack color={"#F6F4F1"}>
            <Text
              mt={"10px"}
              mb={"30px"}
              color={"white"}
              fontSize={"20px"}
              fontWeight={700}
            >
              {" "}
              Lokasi Event{" "}
            </Text>
            <Text fontWeight={500} fontSize={"13px"}> Yogyakarta </Text>
            <Text fontWeight={500} fontSize={"13px"}> Jakarta </Text>
            <Text fontWeight={500} fontSize={"13px"}> Bandung </Text>
          </VStack>
        </GridItem>
        <GridItem mr={"100px"} mb={"30px"}>
          <VStack color={"#F6F4F1"}>
            <Text
              mt={"10px"}
              mb={"30px"}
              color={"white"}
              fontSize={"20px"}
              fontWeight={700}
            >
              {" "}
              Inspirasi Event{" "}
            </Text>
            <Text fontWeight={500} fontSize={"13px"}> Konser </Text>
            <Text fontWeight={500} fontSize={"13px"}> Festival </Text>
            <Text fontSize={"13px"} fontWeight={500}> Workshop </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
