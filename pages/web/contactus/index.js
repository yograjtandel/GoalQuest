import Header from '@/src/Components/web/header/header';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { color } from 'framer-motion';

const contactus = () => {
  return (
    <>
      <Box overflow={'hidden'}>
        <Header />
        <Box>
          <Container maxW={'container.xl'} py={10}>
            <Box
              w="100"
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              mb={4}>
              <Heading mb={2}>Get in Touch</Heading>
              <Text>24/7 We will Answer your Questions and Problems</Text>
            </Box>
            <Box>
              <Flex color="white">
                <Box
                  w={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}
                  p={4}>
                  <Box boxShadow="md" rounded="md" bg="white" p={4} mb={4}>
                    <Box>
                      <Heading color={'primary.400'} size="md" mb={2}>
                        Chat to Us
                      </Heading>
                      <Text color={'secondary.400'} mb={2} fontSize={'14px'}>
                        Our friendly Team is here to Help.
                      </Text>
                      <Link
                        href='mailto:"info@goalquest.in"'
                        color={'secondary.400'}
                        _hover={{ color: 'primary.400' }}>
                        info@goalquest.in
                      </Link>
                    </Box>
                  </Box>
                  <Box boxShadow="md" rounded="md" bg="white" p={4}>
                    <Box>
                      <Heading color={'primary.400'} size="md" mb={2}>
                        Call to Us
                      </Heading>
                      <Text color={'secondary.400'} mb={2} fontSize={'14px'}>
                        Monday to Friday from 9am to 5pm
                      </Text>
                      <Text color={'secondary.400'}>
                        <Link href="tel:6353009881">6353009881</Link>
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}
                  p={2}
                >
                  <Box
                    p={4}
                    w={'100%'}
                    display={'flex'}
                    boxShadow="md"
                    rounded="md"
                    bg="white"
                    flexWrap={'wrap'}
                  >
                    <Box w={'sm'} p={2}>
                      <FormControl>
                        <FormLabel color={'primary.400'}>First Name</FormLabel>
                        <Input type="text" placeholder="First Name" />
                      </FormControl>
                    </Box>
                    <Box w={'sm'} p={2}>
                      <FormControl>
                        <FormLabel color={'primary.400'}>Last Name</FormLabel>
                        <Input type="text" placeholder="Last Name" />
                      </FormControl>
                    </Box>
                    <Box w={'sm'} p={2}>
                      <FormControl>
                        <FormLabel color={'primary.400'}>
                          Email address
                        </FormLabel>
                        <Input type="email" />
                      </FormControl>
                    </Box>
                    <Box w={'sm'} p={2}>
                      <FormControl>
                        <FormLabel color={'primary.400'}>
                          Phone Number
                        </FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                    <Box w={'sm'} p={2} mb={2}>
                      <FormControl>
                        <FormLabel color={'primary.400'}>
                          Share your issue
                        </FormLabel>
                        <Textarea placeholder="Describe your issue" />
                      </FormControl>
                    </Box>
                    <Box w={'100%'}>
                      <Button>Submit</Button>{' '}
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default contactus;
