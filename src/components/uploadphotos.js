import React, { useState } from "react";
import { Button, VStack, Image, Box, Text, Center } from "@chakra-ui/react";
import { IoAddCircle } from "react-icons/io5";
import useUpload from "../hooks/useUpload"; // Import your custom hook

function Upload() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const { uploadedImage, /* other variables from your custom hook */ } = useUpload();
  console.log(fileUploaded);
  const handleFileUpload = () => {

    document.getElementById("fileInput").click();
  };

  const handleRemoveImage = () => {

    setFileUploaded(false);
  };

  return (
    <VStack py="10">
      <Center>
        {!fileUploaded ? (
          <Box
            onClick={handleFileUpload}
            minH="10vh"
            w="50%"
            bg="gray.200"
            display="flex"
            borderRadius="md"
          >
            <VStack align="center">
              <IoAddCircle fontSize="4rem" />
              <Text as='samp' fontSize='16px' textAlign='center'>Klik Disini</Text>
            </VStack>
          </Box>
        ) : (
          <VStack my={{ base: 4, md: 10 }}>
            <Image
              src={uploadedImage?.imageUrl} 
              width="300px"
              height="300px"
              alt={uploadedImage?.imageName} 
            />
            <Button
              onClick={handleRemoveImage}
              colorScheme="red"
              variant="outline"
            >
              Remove Image
            </Button>
          </VStack>
        )}
        {/* Input element for selecting a file */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
      </Center>
    </VStack>
  );
}

export default Upload;
