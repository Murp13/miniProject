// page abis pesan, summary
// Route ke torder page
import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, ChakraProvider, CSSReset, extendTheme, ThemeProvider } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        bg: "white",
        p: 4,
        borderRadius: "lg",
        boxShadow: "lg",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        _hover: {
          bg: "gray.200",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontSize: "2xl",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.700",
      },
    },
  },
});

function Transaction() {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null); 

  const handlePayment = (status) => {

    setPaymentStatus(status);
  };


  const handleFileUpload = (event) => {
    const file = event.target.files[0]; 
    setPaymentProof(file);
  };

  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box p={4}>
          <Flex direction="column" align="center" justify="center">
            <Box maxW="md" bg="white" p={4} borderRadius="lg" boxShadow="lg">
              {/* <Heading size="lg">Payment Page</Heading> */}
              <Text mt={4}>Choose a payment status:</Text>
              <Flex justify="center" mt={4}>
                <Button
                  colorScheme="red"
                  onClick={() => handlePayment("Failed")}
                  mr={2}
                >
                  Failed
                </Button>
                <Button
                  colorScheme="green"
                  onClick={() => handlePayment("Succeed")}
                >
                  Succeed
                </Button>
              </Flex>
              {paymentStatus && (
                <Text mt={4}>
                  Payment Status: <strong>{paymentStatus}</strong>
                </Text>
              )}


              {/* <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileUpload} /> */}
            </Box>
          </Flex>
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default Transaction;

