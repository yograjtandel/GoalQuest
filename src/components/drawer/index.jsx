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
  Button,
} from '@chakra-ui/react';
import { ProjectFormData } from '@/src/store/project/project.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProject } from '@/src/store/project/project.action';
import { useSession } from 'next-auth/react';
import { StageFormData } from '@/src/store/stage/stage.slice';
import { CreateStage } from '@/src/store/stage/stage.action';
import { RoleFormData } from '@/src/store/role/role.slice';
import { CreateRole } from '@/src/store/role/role.action';
import { TagFormData } from '@/src/store/tag/tag.slice';
import { CreateTag } from '@/src/store/tag/tag.action';
import {
  ChildTaskFormData,
  ParentTaskFormData,
  TaskFormData,
  UpdateTaskForm,
} from '@/src/store/task/task.slice';
import { CreateTask } from '@/src/store/task/task.action';

const CustomDrawer = (props) => {
  const { maintitle, isOpen, onClose, btnRef, size, children } = props;

  const taskFormData = useSelector(TaskFormData);
  const parentTaskFormData = useSelector(ParentTaskFormData);
  const childTaskFormData = useSelector(ChildTaskFormData);
  const projectFormData = useSelector(ProjectFormData);
  const stageFormData = useSelector(StageFormData);
  const roleFormData = useSelector(RoleFormData);
  const tagFormData = useSelector(TagFormData);
  const session = useSession();
  const dispatch = useDispatch();
  const getAction = () => {
    switch (maintitle) {
      case 'task':
        return { data: taskFormData, action: CreateTask };
      case 'parent':
        return { data: parentTaskFormData, action: CreateTask };
      case 'child':
        return { data: childTaskFormData, action: CreateTask };
      case 'project':
        return { data: projectFormData, action: CreateProject };
      case 'stage':
        return { data: stageFormData, action: CreateStage };
      case 'role':
        return { data: roleFormData, action: CreateRole };
      case 'tag':
        return { data: tagFormData, action: CreateTag };
    }
  };

  const dialogCloseHandler = () => {
    // switch (maintitle) {
    //   case 'task':
    //   case 'parent':
    //   case 'child':
    //     dispatch(
    //       UpdateTaskForm({
    //         value: {
    //           isParentTask: false,
    //           isChildTask: false,
    //         },
    //         key: 'other',
    //       })
    //     );
    // }
    onClose();
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { action, data } = getAction();
    const res = dispatch(action({ ...data, createdBy: session.data.id }));
  };
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={dialogCloseHandler}
        finalFocusRef={btnRef}
        size={size || 'lg'}
      >
        <DrawerOverlay />
        <DrawerContent overflow={'auto'}>
          <form onSubmit={(e) => SubmitHandler(e)}>
            <DrawerCloseButton />
            <DrawerHeader>New {maintitle}</DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={dialogCloseHandler}>
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
