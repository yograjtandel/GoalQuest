import React from 'react';
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Box,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { getStage } from '@/src/utility/helper';
import { useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';
import KanbanWrapper from '../kanban/KanbanWrapper';

export default function Kanban(props) {
  const { group, name, onDrop } = props;
  const { stages } = useSelector(globalData);
  const drop = async (e) => {
    e.preventDefault();
    await onDrop(e);
  };
  debugger
  return (
    <KanbanWrapper name={name}>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        w={'100%'}
        px={4}
        pb={4}
      >
        <Text>{stages.length > 0 ? getStage(stages, name).title : ''}</Text>
        {/*<Menu>
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
  </Menu>*/}
      </Flex>
      <Box
        w={'100%'}
        h={'100%'}
        minH={'calc(100vh - 125px)'}
        id={`${name}`}
        className={`dropzone-${name}`}
        p={3}
        boxShadow="xl"
        border={'1px solid'}
        borderColor={'gray.300'}
        rounded="md"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          // console.log(e.currentTarget.contains(e.target));
          // console.log(e.currentTarget);
          // console.log(e.target);
          console.log('===================enter');
          if (e.currentTarget.classList.contains(`dropzone-${name}`)) {
            e.currentTarget.classList.add('active-drop-zone');
          }
        }}
        onDragLeave={function (e) {
          const parent = e.target.closest(`#dropzone-${name}`);
          console.log(e.target);
          // console.log(e.currentTarget.contains(e.target));
          console.log(e.currentTarget);
          //   console.log(e.currentTarget.children[0]);
          //   console.log(e.currentTarget.contains(e.target));
          console.log('===================leave');

          //   let isRemoveClass = true;
          //   if (
          //     e.target !== e.currentTarget &&
          //     e.currentTarget.contains(e.target)
          //   ) {
          //     isRemoveClass = false;
          //   }
          if (
            // e.target === e.currentTarget &&
            e.target.classList.contains(`dropzone-${name}`)
            // && !e.currentTarget.childNodes.contains(e.target)
          ) {
            e.currentTarget.classList.remove('active-drop-zone');
          }
        }}
      >
        {props.children}
      </Box>
    </KanbanWrapper>
  );
}
