import React, { useState } from 'react';
import { Stack, Box, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

function Countertickets() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const isCountZero = count === 0;
  const minusColor = isCountZero ? 'gray.400' : 'white';
  const boxBgColor = isCountZero ? 'gray.400' : '#0049CC';

  return (
    <Stack direction={['column', 'row']} spacing='5px' alignItems='center'>
      <Box
        w='40px'
        h='40px'
        borderRadius='md'
        style={{
          backgroundColor: boxBgColor,
          borderRadius: 'md',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={decrement}
      >
        <MinusIcon color={minusColor} />
      </Box>
      <Box w='40px' h='40px' bg='none'>
        <Text
          as='b'
          name='count'
          textAlign='center'
          display='flex'
          alignItems='center'
          justifyContent='center'
          height='100%'
          pointerEvents='none'
        >
          {count}
        </Text>
      </Box>
      <Box
        w='40px'
        h='40px'
        bg='pink.100'
        borderRadius='md'
        onClick={increment}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "#0049CC",
          color: "white",
        }}
      >
        <AddIcon />
      </Box>
    </Stack>
  );
}

export default Countertickets;
