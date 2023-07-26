import { createSlice } from '@reduxjs/toolkit';
import {
  updateTaskForm,
  setIntialTaskData,
  setFormMode,
  setTasks,
  setIntialParentTaskData,
  setIntialChildTaskData,
} from './task.reducers';
import { CreateTask, GetTasks, CreateLogtime, getLogtime } from './task.action';
import { initialState } from './task.initial.state';

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
    builder.addCase(CreateLogtime.fulfilled, (state, action) => {
      state.time_log = initialState.time_log;
      state.timeLogs = [...state.timeLogs, action.payload];
      state.task.time_log_ids = [...state.task.time_log_ids, action.payload.id];
    });
    builder.addCase(getLogtime.fulfilled, (state, action) => {
      state.timeLogs = action.payload;
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
export const timeLogFormData = (state) => state.task.time_log;
export const timeLogs = (state) => state.task.timeLogs;


export const {
  updateTaskForm: UpdateTaskForm,
  setIntialTaskData: SetIntialTaskData,
  setFormMode: SetFormMode,
  setTasks: SetTasks,
  setIntialParentTaskData: SetIntialParentTaskData,
  setIntialChildTaskData: SetIntialChildTaskData,
} = taskSlice.actions;

export default taskSlice.reducer;
