import React from 'react';
import { ChakraProvider, Box, Input, Button, Text, useToast } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  voucherCode: Yup.string(),
});

const VoucherValidationCard = () => {
  const toast = useToast();

  const handleSubmit = async (values, actions) => {
    if (!values.voucherCode) {
      // Show a toast message when the voucher code is empty
      toast({
        title: 'Missing Voucher Code',
        description: 'You can get a discount price from a referral code.',
        status: 'warning', // You can customize this to 'info' or 'warning' as needed
        duration: 5000, // How long the toast message should be visible
        isClosable: true, // Allow the user to close the toast manually
      });
    } else {
      // Simulate applying the voucher (you can replace this with your actual logic)
      await applyVoucher(values.voucherCode);

      // Show a toast message when the voucher is applied
      toast({
        title: 'Voucher Applied',
        description: 'The voucher has been applied successfully.',
        status: 'success',
        duration: 5000, // How long the toast message should be visible
        isClosable: true, // Allow the user to close the toast manually
      });

      // Reset the form or perform any other necessary actions
      actions.resetForm();
    }
  };

  // You can create a function to apply the voucher logic here
  const applyVoucher = async (voucherCode) => {
    // Replace this with your actual voucher application logic
  };

  return (
    <>
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
    </>
  );
};

export default VoucherValidationCard;
