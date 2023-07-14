import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import { formData } from '@/src/store/project/project.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProject } from '@/src/store/project/project.action';

const CustomDrawer = (props) => {
  const { maintitle } = props;
  const projectFormData = useSelector(formData);
  const dispatch = useDispatch();
  const getAction = () => {
    if (maintitle === 'ticket')
      return { data: projectFormData, action: CreateProject };
    if (maintitle === 'project')
      return { data: projectFormData, action: CreateProject };
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const { action, data } = getAction();
    const res = dispatch(action(data));
  };
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        finalFocusRef={props.btnRef}
        size={props.size || 'lg'}
      >
        <DrawerOverlay />
        <DrawerContent overflow={'auto'}>
          <form onSubmit={(e) => SubmitHandler(e)}>
            <DrawerCloseButton />
            <DrawerHeader>New {maintitle}</DrawerHeader>
            <DrawerBody>{props.children}</DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={props.onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                Save
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CustomDrawer;
