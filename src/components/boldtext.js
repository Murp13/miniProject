import { Center, Text } from '@chakra-ui/react'

function Bold(props) {
    return (
        <Center>
        <Text as= 'b'>{props.Text}</Text>
        </Center>
     
    );
  }
  
  export default Bold;