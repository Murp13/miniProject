import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';

function Checkout(props) {
  return (
    <ChakraProvider>
      <Button
        colorScheme='orange' 
        size={props.size}
      >
        {props.Name}
      </Button>
    </ChakraProvider>
  );
}

export default Checkout;

