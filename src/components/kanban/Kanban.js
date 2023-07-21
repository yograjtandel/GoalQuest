import React from 'react';
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { getStage } from '@/src/utility/helper';
import {  useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';
import KanbanWrapper from '../kanban/KanbanWrapper';

export default function Kanban(props) {
  const { group } = props;
  const { stages } = useSelector(globalData);

  return (
    <KanbanWrapper>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        w={'100%'}
        px={4}
        pb={4}
      >
        <Text>
          {stages.length > 0 ? getStage(stages, group._id).title : ''}
        </Text>
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
      {props.children}
    </KanbanWrapper>
  );
}
