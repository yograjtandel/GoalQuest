import Header from '@/src/Components/web/header/header';
import Footer from '@/src/Components/web/footer/footer';
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Aboutusimg from '@/public/assets/images/Aboutus.jpg';
import CustomCard from '@/src/Components/card';

const aboutus = () => {
  const tasktitle = [
    {
      title: 'Our Vision',
      desc: 'At Goalquest, our vision is to empower individuals and teams to effortlessly transform their aspirations into tangible accomplishments. By leveraging the latest advancements in technology and employing user-centered design principles, we strive to provide a seamless and intuitive project management experience that propels you towards success.',
    },
    {
      title: 'Our Commitment',
      desc: 'At Goalquest, we re committed to refining our project management tool based on user feedback, adapting it to meet evolving needs. We believe in the power of collaboration, efficiency, and effective project management. Join us on this transformative journey and unlock your full potential with Goalquest.',
    },
  ];
  return (
    <Box overflow={'hidden'}>
      <Header />
      <Box h={'calc(100vh - 70px)'} overflowY={'auto'}>
        <Container maxW={'container.xl'} py={16}>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            p={10}>
            <Box w={'50%'}>
              <Image src={Aboutusimg.src} maxWidth={'556px'} maxH={'336px'} />
            </Box>
            <Box w={'50%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              p={8}>
              <Box display={'flex'} w={'100%'}>
                <Heading textAlign={'start'} mb={4}>
                  About GoalQuest
                </Heading>
              </Box>
              <Text fontSize={'20px'} mb={4}>
                Goalquest is a powerful project management tool designed to
                streamline your workflow and help you achieve your goals
                efficiently. Founded by Yograj Tandel and Arbaz Diwan, and with
                the expertise of Vishal Patel as a frontend developer, Goalquest
                combines the best of technology and design to revolutionize
                project management.
              </Text>
              <Box w={'100%'}>
                <Button colorScheme="blue">Contact Us</Button>
              </Box>
            </Box>
          </Box>
          <Box py={16}>
            <Box><Heading textAlign={'center'} mb={3}>Our Vision & Our Commitment</Heading>
            <Text textAlign={'center'} mb={'3'}>Driving Success through Streamlined Project Management, Committed to Excellence.</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
              {tasktitle.map((tasktitle) => (
                <Box w={{ base: '100%', md: '50%' }} p={2}>
                  <CustomCard
                    footer={false}
                    openDrawer={false}
                    p={0}
                    bg="gray.100">
                    <CardHeader display={'flex'} justifyContent={'center'}>
                      {/* <Box w={'70px'} h={'70px'} border={'1px solid red'}> */}
                      {tasktitle.icon}
                      {/* </Box> */}
                    </CardHeader>
                    <CardBody p={0}>
                      <Text
                        fontSize={28}
                        fontWeight={'semibold'}
                        color={'primary.400'}
                        textAlign={'center'}
                        mb={2}>
                        {tasktitle.title}
                      </Text>
                      <Text
                        fontSize={16}
                        fontWeight={'normal'}
                        textAlign={'center'}>
                        {tasktitle.desc}
                      </Text>
                    </CardBody>
                  </CustomCard>
                </Box>
              ))}
            </Box>
          </Box>
        
        </Container>
        <Footer/>
      </Box>
    </Box>
  );
};
export default aboutus;