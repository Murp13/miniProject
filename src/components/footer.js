import React from "react";
import { Box, Grid, GridItem, VStack, Text } from "@chakra-ui/react";
import {GiTicket} from "react-icons/gi"
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <Box pb={"100px"} bg={"white"} height={"100px"}>
      <Grid className="grid-container">
        <GridItem className="footer1" bg={"red"} ml={"0px"}>
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
        <GridItem className="footer2">
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
        <GridItem className="footer3">
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
        <GridItem mr={"auto"} mb={"30px"} className="footer4">
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
            <Text fontWeight={500} fontSize={"13px"}> Musik </Text>
            <Text fontWeight={500} fontSize={"13px"}> Kesenian </Text>
            <Text fontSize={"13px"} fontWeight={500}> Hiburan </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
