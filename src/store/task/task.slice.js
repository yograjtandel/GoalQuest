import { createSlice } from '@reduxjs/toolkit';
import {
  updateTaskForm,
  setIntialTaskData,
  setFormMode,
  setTasks,
  setIntialParentTaskData,
  setIntialChildTaskData,
} from './task.reducers';
import { CreateTask, GetTasks, UpdateTask } from './task.action';

const initialState = {
  tasks: [],
  parentTasks: [],
  childTasks: [],
  task: {
    title: '',
    project_id: '',
    deadline: '',
    description: '',
    priority: '',
    createdBy: '',
    asignee: '',
    stage: '',
    tag: '',
    parent_task: [],
    child_task: [],
  },
  parent_task: {
    title: '',
    project_id: '',
    deadline: '',
    description: '',
    priority: '',
    createdBy: '',
    asignee: '',
    stage: '',
    tag: '',
  },
  child_task: {
    title: '',
    project_id: '',
    deadline: '',
    description: '',
    priority: '',
    createdBy: '',
    asignee: '',
    stage: '',
    tag: '',
  },
  other: {
    isParentTask: false,
    isChildTask: false,
    form_mode: {},
  },
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTaskForm,
    setIntialTaskData,
    setFormMode,
    setTasks,
    setIntialParentTaskData,
    setIntialChildTaskData,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateTask.fulfilled, (state, action) => {
      if (state.other.isParentTask) {
        state.parentTasks = [...state.parentTasks, action.payload];
        state.task.parent_task = [...state.task.parent_task, action.payload.id];
        state.parent_task = initialState.parent_task;
        state.other.isParentTask = false;
      } else if (state.other.isChildTask) {
        state.childTasks = [...state.childTasks, action.payload];
        state.task.child_task = [...state.task.child_task, action.payload.id];
        state.child_task = initialState.child_task;
        state.other.isChildTask = false;
      }
    });
    builder.addCase(GetTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const TaskFormData = (state) => state.task.task;
export const ParentTaskFormData = (state) => state.task.parent_task;
export const ChildTaskFormData = (state) => state.task.child_task;
export const TaskOtherData = (state) => state.task.other;
export const tasks = (state) => state.task.tasks;
export const parentTasks = (state) => state.task.parentTasks;
export const childTasks = (state) => state.task.childTasks;
export const {
  updateTaskForm: UpdateTaskForm,
  setIntialTaskData: SetIntialTaskData,
  setFormMode: SetFormMode,
  setTasks: SetTasks,
  setIntialParentTaskData: SetIntialParentTaskData,
  setIntialChildTaskData: SetIntialChildTaskData,
} = taskSlice.actions;

export default taskSlice.reducer;
