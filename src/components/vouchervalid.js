import React from 'react';
import { ChakraProvider, Box, Input, Button, Text } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  voucherCode: Yup.string().required('Voucher code is required'),
});

const VoucherValidationCard = () => {
  const handleSubmit = (values, actions) => {

  };

  return (
    <ChakraProvider>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        m="auto"
        mt={4}
        boxShadow="lg"
      >
        <Text fontSize="lg" as="b" mb={4}>
         Kode Potongan 
        </Text>
        <Formik
          initialValues={{ voucherCode: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name="voucherCode">
              {({ field }) => (
                <Box>
                  <Input
                    {...field}
                    id="voucherCode"
                    type="text"
                    placeholder="Masukkan Disini"
                  />
                  <ErrorMessage name="voucherCode" component="div" color="red" />
                </Box>
              )}
            </Field>
            <Button mt={4} colorScheme="teal" type="submit" width="100%">
              OK
            </Button>
          </Form>
        </Formik>
      </Box>
    </ChakraProvider>
  );
};

export default VoucherValidationCard;
