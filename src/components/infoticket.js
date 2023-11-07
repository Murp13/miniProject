import React from "react";
import { Card, CardBody, Flex, Spacer } from "@chakra-ui/react";
import { Heading, Stack, Text, Box, StackDivider } from '@chakra-ui/react';

function Buyingticket(props) {
  // console.log('Received props:', props); 
  // console.log('type:', props.type); 
  // console.log('qty:', props.qty); 
  // console.log('price:', props.price); 
  return (
    <>
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Flex>
            <Box>
            <Heading size='sm' textTransform='uppercase'>
              {props.type || "Type not available"}
            </Heading>
            </Box>
            <Spacer />
          </Flex>
          <Box>
            <Heading size='xs' >
            {props.qty} x {props.price}
            </Heading>
          </Box>
        </Stack>
      </CardBody>
    </Card>
    </>
  );
}

export default Buyingticket;


//  const ExportedComponents = { Ticketcard };

// export default ExportedComponents;
// export function Infocard(props) {
//   return (
//     <Card>
//       <CardBody>
//         <Stack divider={<StackDivider />} spacing='4'>
//           <Flex>
//             <Box>
//               <Heading size='xs' textTransform='uppercase'>
//                 Jenis Tiket
//               </Heading>
//             </Box>
//             <Spacer />
//           </Flex>
//           <Box>
//             <Heading size='xs' textTransform='uppercase' fontWeight='normal'>
//               {props.type}
//             </Heading>
//           </Box>
//         </Stack>
//       </CardBody>
//     </Card>
//   );
// }

// export function Priceinfo(props) {
//   return (
//     <Card>
//       <CardBody>
//         <Stack divider={<StackDivider />} spacing='4'>
//           <Flex>
//             <Box>
//               <Heading size='xs' textTransform='uppercase'>
//                 Harga (Rp)
//               </Heading>
//             </Box>
//             <Spacer />
//           </Flex>
//           <Box>
//             <Heading size='xs' textTransform='uppercase' fontWeight='normal'>
//               {props.price}
//             </Heading>
//           </Box>
//         </Stack>
//       </CardBody>
//     </Card>
//   );
// }

// export function Qtyinfo(props) {
//   return (
//     <Card>
//       <CardBody>
//         <Stack divider={<StackDivider />} spacing='4'>
//           <Flex>
//             <Box>
//               <Heading size='xs' textTransform='uppercase'>
//                 Jumlah
//               </Heading>
//             </Box>
//             <Spacer />
//           </Flex>
//           <Box>
//             <Heading size='xs' textTransform='uppercase' fontWeight='normal'>
//               x {props.qty}
//             </Heading>
//           </Box>
//         </Stack>
//       </CardBody>
//     </Card>
//   );
// }
