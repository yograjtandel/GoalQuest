import InputWrapper from "@/src/Components/form/InputWrapper";
import { Box, Button, Card, CardBody, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

const login = () => {
  return (
    <Box w={"100%"} h={"100%"} minH={'100vh'} border={'1px solid'}  overflow={"hidden"} >
      <Container
        maxW="container.lg"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={'100%'}
        minH={'100vh'}
        overflow={"hidden"}
      >
        <Card p={4} w={'50%'} boxShadow='lg' rounded='md' bg='white'>
          <CardBody>
           <Heading as='h4' size='md'textAlign={'center'}>Welcome Back !</Heading>
           <InputWrapper title="Email Id">
            <Input type="text" placeholder="Email id"></Input>
           </InputWrapper>
           <InputWrapper  title="Password">
            <Input type="password" placeholder="*******"></Input>
           </InputWrapper>
           
           <Flex w={'100%'} mt={'4'} flexDirection={'column'}>
          <Box> <Link href={'#'}>Forgot Password?</Link></Box>
           <Button mt={4} w={'100%'} colorScheme='blue'>Login</Button>
           </Flex>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};
export default login;
