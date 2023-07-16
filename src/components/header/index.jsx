import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import CustomDrawer from '../drawer';
import { NewTask } from '../task';
import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { NewProject } from '../project';
import { header_heading } from '@/src/store/global/global.slice';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const { stages } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const HeaderHeading = useSelector(header_heading);

  const onMenuClickHAndler = (e) => {
    setTitle(e.target.name);
    onOpen();
  };
  return (
    <>
      <Box
        boxShadow="md"
        p="6"
        py={2}
        bg="white"
        display={'Flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        overflow={'hidden'}
      >
        <Heading fontSize={'1.4rem'}>{HeaderHeading}</Heading>
        <Box display={'flex'}>
          <Menu>
            <MenuButton
              as={Button}
              size={'md'}
              colorScheme="teal"
              variant="outline"
              lineHeight={0}
            >
              New
              <AddIcon
                size={'14px'}
                ml={2}
                _hover={{ color: 'blue.300', cursor: 'pointer' }}
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onMenuClickHAndler} name="task">
                Task
              </MenuItem>
              <MenuItem onClick={onMenuClickHAndler} name="project">
                Project
              </MenuItem>
            </MenuList>
          </Menu>
          <Box ms={'3'}>
            <Menu ps={2}>
              <MenuButton borderRadius={'50%'} p={2} as={Button}></MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Login/Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
      <CustomDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        maintitle={title}
      >
        {title === 'task' && <NewTask />}
        {title === 'project' && <NewProject stages={stages} />}
      </CustomDrawer>
    </>
  );
};

export default Header;
