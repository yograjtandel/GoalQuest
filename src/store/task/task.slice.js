import { createSlice } from '@reduxjs/toolkit';
import { updateTaskForm } from './task.reducers';
import { CreateTask } from './task.action';

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
  },
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTaskForm,
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
  },
});

export const TaskFormData = (state) => state.task.task;
export const ParentTaskFormData = (state) => state.task.parent_task;
export const ChildTaskFormData = (state) => state.task.child_task;
export const OtherData = (state) => state.task.other;
export const tasks = (state) => state.task.tasks;
export const { updateTaskForm: UpdateTaskForm } = taskSlice.actions;

export default taskSlice.reducer;
