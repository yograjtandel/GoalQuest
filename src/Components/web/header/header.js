import { AddIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Stack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Button,
  Image,
  Link,
  Container,
} from '@chakra-ui/react';
import logo from '@/public/assets/images/logo.png';

const Links = ['Home','About Us', 'Team', 'Contact Us'];
const webheader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      boxShadow="lg"
      rounded="md"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack
            spacing={8}
            w={{ base: '100%', sm: '100%' }}
            alignItems={'center'}
            justifyContent={{
              base: 'space-between',
              sm: 'space-between',
              md: 'space-between',
            }}
          >
            <Box>
              <Image src={logo.src} w={'auto'} h={'40px'} alt="logo" />
            </Box>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              justifyContent={'center'}
            >
              {Links.map((link) => (
                <Link
                  key={link}
                  fontWeight={'600'}
                  _hover={{
                    color: 'primary.400',
                  }}
                >
                  {link}
                </Link>
              ))}
            </HStack>
            <Flex
              alignItems={'center'}
              display={{ base: 'none', sm: 'none', md: 'flex' }}
            >
              <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4}>
                Sign In
              </Button>
              <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4}>
                Sign Up
              </Button>
            </Flex>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} fontWeight={'500'}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default webheader;
