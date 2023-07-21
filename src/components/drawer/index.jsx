import React, { useEffect, useState } from 'react';
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
import {
  ProjectFormData,
  ProjectOtherData,
} from '@/src/store/project/project.slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  CreateProject,
  GetProjects,
  UpdateProject,
} from '@/src/store/project/project.action';
import { useSession } from 'next-auth/react';
import { StageFormData, StageOtherData } from '@/src/store/stage/stage.slice';
import { CreateStage } from '@/src/store/stage/stage.action';
import { RoleFormData, RoleOtherData } from '@/src/store/role/role.slice';
import { CreateRole } from '@/src/store/role/role.action';
import { TagFormData, TagOtherData } from '@/src/store/tag/tag.slice';
import { CreateTag } from '@/src/store/tag/tag.action';
import {
  ChildTaskFormData,
  ParentTaskFormData,
  SetFormMode,
  TaskFormData,
  TaskOtherData,
  UpdateTaskForm,
} from '@/src/store/task/task.slice';
import { CreateTask, GetTasks, UpdateTask } from '@/src/store/task/task.action';

const CustomDrawer = (props) => {
  const { maintitle, isOpen, onClose, btnRef, size, children } = props;

  const taskFormData = useSelector(TaskFormData);
  const parentTaskFormData = useSelector(ParentTaskFormData);
  const childTaskFormData = useSelector(ChildTaskFormData);
  const projectFormData = useSelector(ProjectFormData);
  const stageFormData = useSelector(StageFormData);
  const roleFormData = useSelector(RoleFormData);
  const tagFormData = useSelector(TagFormData);
  const taskOtherData = useSelector(TaskOtherData);
  const stageOtherData = useSelector(StageOtherData);
  const roelOtherData = useSelector(RoleOtherData);
  const tagOtherData = useSelector(TagOtherData);
  const projectOtherData = useSelector(ProjectOtherData);

  const session = useSession();
  const dispatch = useDispatch();

  const getAction = () => {
    debugger;

    switch (maintitle) {
      case 'task':
        return {
          data: taskFormData,
          action:
            taskOtherData.form_mode.task === 'create' ? CreateTask : UpdateTask,
          post_action: GetTasks,
        };
      case 'parent':
        return {
          data: parentTaskFormData,
          action:
            taskOtherData.form_mode.parent === 'create'
              ? CreateTask
              : UpdateTask,
          post_action: UpdateTask,
        };
      case 'child':
        return {
          data: childTaskFormData,
          action:
            taskOtherData.form_mode.child === 'create'
              ? CreateTask
              : UpdateTask,
          post_action: UpdateTask,
        };
      case 'project':
        debugger;
        return {
          data: projectFormData,
          action:
            projectOtherData.form_mode.project === 'create'
              ? CreateProject
              : UpdateProject,
          post_action: GetProjects,
        };
      case 'stage':
        debugger;
        return {
          data: stageFormData,
          action:
            stageOtherData.form_mode.stage === 'create' ? CreateStage : false,
        };
      case 'role':
        return {
          data: roleFormData,
          action:
            roelOtherData.form_mode.role === 'create' ? CreateRole : false,
        };
      case 'tag':
        return {
          data: tagFormData,
          action: tagOtherData.form_mode.tag === 'create' ? CreateTag : false,
        };
    }
  };

  const dialogCloseHandler = () => {
    switch (maintitle) {
      case 'task':
      case 'parent':
      case 'child':
        dispatch(
          UpdateTaskForm({
            value: {
              isParentTask: false,
              isChildTask: false,
            },
            key: 'other',
          })
        );
        const form_mode = { ...taskOtherData.form_mode };
        delete form_mode[maintitle];
        dispatch(SetFormMode(form_mode));
    }
    onClose();
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { action, data, post_action } = getAction();
    debugger;

    await dispatch(action({ ...data, createdBy: session.data.id }));
    if (post_action) {
      dispatch(post_action());
    }
    dialogCloseHandler();
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
            <DrawerHeader>{maintitle}</DrawerHeader>
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
