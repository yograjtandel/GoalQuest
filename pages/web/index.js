import { v4 as uuidv4 } from 'uuid';
import CustomCard from '@/src/components/card';
import Webheader from '@/src/components/web/header/Header';
import Webhero from '@/src/components/web/herosection/herosection';
import { BiShieldAlt2, BiUser, BiNote } from 'react-icons/bi';
import { HiOutlineUsers } from 'react-icons/hi';
import Screenimg from '@/public/assets/images/screen.jpg';
import Footer from '@/src/components/web/footer/footer';
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  List,
  Text,
} from '@chakra-ui/react';

const landingpage = () => {
  const tasktitle = [
    {
      icon: <BiUser style={{ width: '50px', height: '50px' }} />,

      title: 'Role Base User Management',
      desc: 'Efficiently manage user roles, permissions, and access control. Enhance security and streamline user management with our tool.',
    },
    {
      icon: <BiNote style={{ width: '50px', height: '50px' }} />,
      title: 'Project Task Management',
      desc: 'Effortlessly track, prioritize, and resolve project tasks. Streamline task management and collaboration with our efficient task management solution.',
    },
    {
      icon: <HiOutlineUsers style={{ width: '50px', height: '50px' }} />,
      title: 'Collaborate',
      desc: 'Promote seamless team collaboration in project task management. Enhance communication, task coordination, and productivity with our collaborative task management solution.',
    },
  ];
  return (
    <Box w={'100%'} overflowY={'hidden'}>
      <Webheader w="100%" />
      <Box w={'100%'} h={'calc(100vh - 70px)'} overflowY={'scroll'}>
        <Webhero />
        <Box py={32} bg={'gray.200'}>
          <Container
            maxW="container.xl"
            display={'flex'}
            flexWrap={'wrap'}
            w={'100%'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Heading
              as="h2"
              size="2xl"
              mb={3}
              textAlign={'center'}
              color={'primary.400'}
            >
              We Provide the Powerful <br />
              Featured Services
            </Heading>
            <Text w={'50%'} mb={6} textAlign={'center'}>
              "Streamline Workflows, Enhance Collaboration, and Boost
              Productivity with Our Comprehensive Task Management Services"
            </Text>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
              {tasktitle.map((tasktitle) => (
                <Box w={{ base: '100%', md: '33.33%' }} p={2} key={uuidv4()}>
                  <CustomCard
                    footer={false}
                    openDrawer={false}
                    p={0}
                    bg="gray.100"
                  >
                    <CardHeader display={'flex'} justifyContent={'center'}>
                      {/* <Box w={'70px'} h={'70px'} border={'1px solid red'}> */}
                      {tasktitle.icon}
                      {/* </Box> */}
                    </CardHeader>
                    <CardBody p={0}>
                      <Text
                        fontSize={20}
                        fontWeight={'semibold'}
                        color={'primary.400'}
                        textAlign={'center'}
                        mb={2}
                      >
                        {tasktitle.title}
                      </Text>
                      <Text
                        fontSize={16}
                        fontWeight={'normal'}
                        textAlign={'center'}
                      >
                        {tasktitle.desc}
                      </Text>
                    </CardBody>
                  </CustomCard>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
        <Box py={0} bg={'white'}>
          <Box w={'100%'}>
            <Flex color="white" w={'100%'}>
              <Box w={{ base: '100%', md: '50%', lg: '50%' }} height={'100%'}>
                <Image src={Screenimg.src}></Image>
              </Box>
              <Box w={'50%'} padding={4} py={16}>
                <Container
                  height={'100%'}
                  display={'flex'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                >
                  <Heading color={'primary.400'} size="lg" mb={4}>
                    Easy to use{' '}
                  </Heading>
                  <Text color={'secondary.400'}>
                    An easy-to-use project management tool simplifies planning,
                    tracking, and collaboration. It offers intuitive interfaces,
                    drag-and-drop functionality, and clear visualizations,
                    enabling teams to effortlessly manage tasks, timelines, and
                    resources. With user-friendly features, it ensures a smooth
                    project management experience for all users.
                  </Text>
                  <Box mt={8}>
                    <Button>Know more</Button>
                  </Box>
                </Container>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w={'100%'}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default landingpage;
