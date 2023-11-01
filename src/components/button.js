import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';

function Checkout(props) {
  return (
    <ChakraProvider>
      <Button
        colorScheme='orange' // Use the correct prop name and the defined color scheme
        variant='solid'
        size={props.size}
      >
        {props.Name}
      </Button>
    </ChakraProvider>
  );
}

export default Checkout;

