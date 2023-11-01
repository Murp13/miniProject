import { Box, ChakraProvider, Container, Center } from "@chakra-ui/react";
import Axios from "axios";
import Upload from "../components/uploadphoto";

Axios.defaults.baseURL = "http://localhost:4000";
function UploadImage() {
  return (
    // <ChakraProvider>
    <Center>
      <Box
        // minH="10vh"
        w="50%"
        bg="gray.400"
        display="flex"
      >
        <Container maxWidth="container.md">
          <Upload />
        </Container>
      </Box>
      </Center>
    // </ChakraProvider>
  );
}

export default UploadImage;



