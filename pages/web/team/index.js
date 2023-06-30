import {
  Box,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Header from '@/src/Components/web/header/header.js';
import CustomCard from '@/src/Components/card';
import { BiHome, BiTask, BiLayerPlus, Bigith } from 'react-icons/bi';

const team = () => {
  const tasktitle = [
    {
      employeename: 'Yograj Tandel',
      designation: 'Co-Founder & Mern Stack Developer',
      linkedin: '',
      github: '',
    },
    {
      employeename: 'Arbaz Diwan',
      designation: 'Co-Founder & Mern Stack Developer',
      linkedin: '',
      github: '',
    },
    {
      employeename: 'Vishal Patel',
      designation: 'Frontend Developer',
      linkedin: '',
      github: '',
    },
  ];
  return (
    <Box>
      <Header />
      <Box h={'calc(100vh - 70px)'} overflowY={'auto'}>
        <Container maxW={'container.xl'} py={8}>
          <Box w={'100%'}>
            <Heading textAlign={'center'} color={'primary.400'} mb={2}>
              Meet Our Expert Team
            </Heading>
            <Text textAlign={'center'} mb={4}>
              Collaborative Minds, Uniting for Your Project Success
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
            {tasktitle.map((tasktitle) => (
              <Box w={{ base: '100%', md: '33.33333%' }} p={2}>
                <CustomCard
                  footer={false}
                  openDrawer={false}
                  p={0}
                  bg="gray.100"
                >
                  <CardHeader display={'flex'} justifyContent={'center'} p={8}>
                    <Image src="" w={'100%'} h={'180px'} />
                  </CardHeader>
                  <CardBody p={0}>
                    <Text
                      fontSize={28}
                      fontWeight={'semibold'}
                      color={'primary.400'}
                      textAlign={'center'}
                      mb={2}>
                      {tasktitle.employeename}
                    </Text>
                    <Text
                      fontSize={16}
                      fontWeight={'normal'}
                      textAlign={'center'}>
                      {tasktitle.designation}
                    </Text>
                    <Box display={'flex'}>
                      <h3>
                        <BiHome />
                      </h3>
                    </Box>
                  </CardBody>
                </CustomCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default team;
