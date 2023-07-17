import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Card from '@/src/components/card/index';
import { NewTask } from '@/src/components/task';

const Task = () => {
  return (
    <Box gap={4} overflowX={'auto'} display={'flex'} h={'calc(100vh - 70px)'}>
      <Box w={'300px'} minWidth={'300px'}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          p={3}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            w={'100%'}
            px={4}
            pb={4}
          >
            <Text>To Do </Text>
            <Menu>
              <MenuButton as={Button} bg={'none'}>
                <AddIcon
                  size={'14px'}
                  _hover={{ color: 'blue.300', cursor: 'pointer' }}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Card
            title={'hello'}
            name={'Css Changes'}
            onClickDispaly={<NewTask />}
          />
          <Card />
        </Box>
      </Box>
    </Box>
  );
};
export default Task;
