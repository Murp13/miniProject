import {
  Box,
  Container,
  Center,
  Button,
  Text,
  VStack,
  HStack,
  Divider,
  Heading,
  StackDivider,
  Stack,
  CardBody,
  Card,
} from "@chakra-ui/react";
import Upload from "../components/uploadphoto";
import Footer from "../components/footer";

function UploadImage() {
  return (
    <>
      <Center>
        <Box
          mt="10"
          minH="10vh"
          w={["100%", "50%"]} 
          bg="gray.200"
          display="flex"
          borderRadius="md"
        >
          <Container maxWidth="container.md">
            <Upload />
          </Container>
        </Box>
      </Center>
      <Center>
        <Box
          width={["100%", "50%"]} 
          mt={"30"}
          mb={"10px"}
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4} 
        >
          <Stack spacing={2}>
            <Heading mb={3} fontSize="24">
              Mohon Baca dengan Seksama 
            </Heading>
            <Divider size="lg" variant="thick" colorScheme="brand" opacity={0.5} borderColor="grey" />
          </Stack>

          <Divider opacity={0.5} borderColor="grey" />

          <HStack spacing={4}>
            <VStack align="start">
              <Box pt={2}>
                <Text fontWeight="bold">Cara Upload Bukti Pembayaran</Text>
                <Text>Ikuti langkah berikut yaa:</Text>
                <Text>1. Bayar dulu yaa</Text>
                <Text>2. Foto atau Screen Shot bukti</Text>
                <Text>3. Klik di bagian kotak abu-abu</Text>
                <Text>4. Pilih foto yang mau di pakai</Text>
                <Text>5. Ditunggu aja</Text>
                <Text mt="2">Terima Kasih, Kalo Sudah bayar :)</Text>
              </Box>
              <Box pt={1} pb={1}>
                <Text fontWeight="bold">Jumlah Pembayaran</Text>
                <Text>Rp 115.000,00</Text>
              </Box>
            </VStack>
          </HStack>
        </Box>
      </Center>
      <Center>
        <Button colorScheme="red" size="md" my = '2' p={2}>
          Back
        </Button>
      </Center>
      <Footer />
    </>
  );
}

export default UploadImage;
