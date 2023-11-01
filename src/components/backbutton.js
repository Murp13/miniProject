import React from 'react';
import { ChakraProvider, Button, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const BackButton = () => {
  return (
    <ChakraProvider>
      <Button
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant='unstyled'
        _hover={{
          textDecoration: 'underline',
          color: 'teal.800',
        }}
      >
        <Flex alignItems="center">
          <ChevronLeftIcon boxSize={5}  />
          Back
        </Flex>
      </Button>
    </ChakraProvider>
  );
};

export default BackButton;
