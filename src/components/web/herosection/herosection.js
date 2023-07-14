import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Bgimg from '@/public/assets/images/bg.jpg';
const herosection = () => {
  return (
    <>
      <Box w={'100%'}>
        <Container
          maxW="container.xl"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          h={'90vh'}
        >
          <SimpleGrid
            columns={{base:'1' , md:'2'}}
            spacing={0}
            w={'100%'}
            h={'100%'}
            py={{ base: '8', sm: '8', md: '' }}
            alignItems={'center'}
            justifyContent={'center'}
            flexWrap={'wrap'}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              flexDirection={'column'}
            >
              <Stack>
                <Heading
                  as="h1"
                  textAlign={{base:'center' , md:'start'}}
                  size={{ base: 'xl', md: '3xl' }}
                  noOfLines={3}
                  color={'primary.400'}
                >
                  One Place <br />
                  to Manage <br /> your Work ...!
                </Heading>
              </Stack>
              <Text color={'secondary.400'} mt={'4'}   textAlign={{base:'center' , md:'start'}} >
                Streamline, Collaborate, Succeed: Your Ultimate Project
                Management Companion
              </Text>
              <Box display={'flex'} mt={4}justifyContent={{base:'center' , md:'start'}}>
              <Button size='md' color={'primary.400'} colorScheme="gray" variant="solid">
                Learn More
              </Button>
              </Box>
            </Box>
            <Box
              height="100%"
              backgroundImage={Bgimg.src}
              backgroundRepeat={'no-repeat'}
              backgroundSize={'cover'}
            ></Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
export default herosection;
