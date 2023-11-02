import { Center, Heading, Text } from '@chakra-ui/react'

function Boldheader(props) {
    return (
        <Center>
        <Heading>{props.Text}</Heading>
        </Center>
     
    );
  }

  export default Boldheader;