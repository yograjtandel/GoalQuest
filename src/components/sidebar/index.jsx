import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';
import NextLink from 'next/link';
import { Flex, Box, Image, List, ListItem, Link } from '@chakra-ui/react';
import logo from '@/public/assets/images/logo.png';
import { BiHome, BiTask, BiLayerPlus, BiCog } from 'react-icons/bi';
import { UpdateHeading } from '@/src/store/global/global.slice';
import { useDispatch } from 'react-redux';

const LinkItems = [
  { icon: <BiHome />, href: '/', Heading: 'Home' },

  { icon: <BiLayerPlus />, href: '/project', Heading: 'Project' },
  { icon: <BiTask />, href: '/task', Heading: 'Task' },
  { icon: <BiCog />, href: '/setting', Heading: 'Setting' },
];
const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      UpdateHeading(
        LinkItems.find((link) => document.location.pathname === link.href)
          .Heading
      )
    );
  }, []);

  return (
    <Flex
      h={'100%'}
      w={'100%'}
      m={0}
      flexDirection="column"
      boxShadow="xl"
      p="2"
      rounded="md"
      bg="white"
    >
      <Box
        w={'100%'}
        display={'flex'}
        alignItems="start"
        justifyContent="center"
        p={0}
      >
        <Image src={logo.src} w={'auto'} h={'40px'} alt="logo" />
      </Box>
      <Flex
        pt={5}
        w={'100%'}
        display={'flex'}
        alignItems={'start'}
        justifyContent={'center'}
        lineHeight={0}
      >
        <List>
          {LinkItems.map((item, index) => (
            <ListItem
              w={'100%'}
              fontSize={'21px'}
              cursor={'pointer'}
              h={'100%'}
              key={uuidv4()}
              onClick={() => dispatch(UpdateHeading(item.Heading))}
            >
              <Link
                as={NextLink}
                href={item.href}
                p={4}
                w={'100%'}
                display={'flex'}
                _hover={{ bg: `primary.400`, color: 'white' }}
              >
                {item.icon}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
