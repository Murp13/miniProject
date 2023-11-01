import React from "react";
import { Card, CardBody, Flex, Spacer} from "@chakra-ui/react";
import { Heading, Stack, Text, Box, StackDivider } from '@chakra-ui/react'
import Countertickets from "./counterticket";


function Choosecard(props) {
    return(
    <Card>
       
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Flex >
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                {props.type}
                </Heading>
            </Box>
                <Spacer />
            <Box >
                <Countertickets />
            </Box>
          
            </Flex>
            <Box > {/*style={{  backgroundColor: "#76C4AE"}} */}
                <Heading size='xs' textTransform='uppercase'>
                {props.price}
                </Heading>
                <Text pt='2' fontSize='sm'>
                {props.date}
                </Text>
            </Box>

            </Stack>
        </CardBody>
    </Card>

    )
}

export default Choosecard;