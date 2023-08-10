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
import { CreateStage, GetStages } from '@/src/store/stage/stage.action';
import { RoleFormData, RoleOtherData } from '@/src/store/role/role.slice';
import { CreateRole, GetRoles } from '@/src/store/role/role.action';
import { TagFormData, TagOtherData } from '@/src/store/tag/tag.slice';
import { CreateTag, GetTages } from '@/src/store/tag/tag.action';
import {
  ChildTaskFormData,
  ParentTaskFormData,
  SetFormMode,
  TaskFormData,
  TaskOtherData,
  timeLogFormData,
  UpdateTaskForm,
} from '@/src/store/task/task.slice';
import {
  CreateLogtime,
  CreateTask,
  GetTasks,
  UpdateTask,
  UpdateTimeLog,
} from '@/src/store/task/task.action';
import { UserFormData, UserOtherData } from '@/src/store/user/user.slice';
import { CreateUser, GetUsers } from '@/src/store/user/user.action';

const CustomDrawer = (props) => {
  const { maintitle, isOpen, onClose, btnRef, size, children } = props;

  const taskFormData = useSelector(TaskFormData);
  const parentTaskFormData = useSelector(ParentTaskFormData);
  const childTaskFormData = useSelector(ChildTaskFormData);
  const TimeLogFormData = useSelector(timeLogFormData);
  const projectFormData = useSelector(ProjectFormData);
  const stageFormData = useSelector(StageFormData);
  const roleFormData = useSelector(RoleFormData);
  const tagFormData = useSelector(TagFormData);
  const userFormData = useSelector(UserFormData);
  const taskOtherData = useSelector(TaskOtherData);
  const stageOtherData = useSelector(StageOtherData);
  const roelOtherData = useSelector(RoleOtherData);
  const tagOtherData = useSelector(TagOtherData);
  const projectOtherData = useSelector(ProjectOtherData);
  const userOtherData = useSelector(UserOtherData);

  const session = useSession();
  const dispatch = useDispatch();

  const getAction = () => {
    switch (maintitle) {
      case 'task':
        return {
          data: { ...taskFormData, company: session.data.company },
          action:
            taskOtherData.form_mode.task === 'create' ? CreateTask : UpdateTask,
        //   post_action: GetTasks,
        //   post_action_prms: session,
        };
      case 'parent':
        return {
          data: { ...parentTaskFormData, company: session.data.company },
          action:
            taskOtherData.form_mode.parent === 'create'
              ? CreateTask
              : UpdateTask,
        //   post_action: UpdateTask,
        };
      case 'child':
        return {
          data: { ...childTaskFormData, company: session.data.company },
          action:
            taskOtherData.form_mode.child === 'create'
              ? CreateTask
              : UpdateTask,
        //   post_action: UpdateTask,
        };
      case 'logtime':
        return {
          data: { data: JSON.stringify(TimeLogFormData) },
          action:
            taskOtherData.form_mode.logtime === 'create'
              ? CreateLogtime
              : UpdateTimeLog,
        };
      case 'project':
        debugger
        return {
          data: { ...projectFormData, company: session.data.company },
          action:
            projectOtherData.form_mode.project === 'create'
              ? CreateProject
              : UpdateProject,
        //   post_action: GetProjects,
        //   post_action_prms: session,
        };
      case 'stage':
        return {
          data: { ...stageFormData, company: session.data.company },
          action:
            stageOtherData.form_mode.stage === 'create' ? CreateStage : false,
        //   post_action: GetStages,
        //   post_action_prms: session,
        };
      case 'role':
        return {
          data: { ...roleFormData, company: session.data.company },
          action:
            roelOtherData.form_mode.role === 'create' ? CreateRole : false,
        //   post_action: GetRoles,
        //   post_action_prms: session,
        };
      case 'tag':
        return {
          data: { ...tagFormData, company: session.data.company },
          action: tagOtherData.form_mode.tag === 'create' ? CreateTag : false,
        //   post_action: GetTages,
        //   post_action_prms: session,
        };
      case 'user':
        return {
          data: { ...userFormData, company: session.data.company },
          action:
            userOtherData.form_mode.user === 'create' ? CreateUser : false,
        //   post_action: GetUsers,
        //   post_action_prms: session,
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

    const { action, data, post_action, post_action_prms } = getAction();
debugger
    await dispatch(action({ ...data, createdBy: session.data.id }));
    if (post_action) {
      dispatch(post_action(post_action_prms));
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
