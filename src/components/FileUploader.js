import { useRef } from "react";
import "../CSS/upload.css";
import { Button, VStack, Image, Box, Text, Center, HStack } from "@chakra-ui/react";
import { IoAddCircle } from "react-icons/io5";

export const FileUploader = ({ handleFile }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <Center>
      <HStack spacing={4}>
        <VStack align="center">
          <Box
            w="50%"
            bg="gray.200"
            display="flex"
            borderRadius="md"
            onClick={handleClick}
            style={{ display: "flex", alignItems: "center", gap: "8px" }} 
          >
            <VStack>
            <IoAddCircle fontSize="54px" />
          <Text as="samp" fontSize="14px" textAlign="center" >Klik Disini</Text>
          </VStack>
          </Box>
        </VStack>
      </HStack>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </Center>
  );
};
