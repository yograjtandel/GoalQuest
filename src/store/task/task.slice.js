import { createSlice } from '@reduxjs/toolkit';
import { updateTaskForm } from './task.reducers';

const initialState = {
  tasks: [],
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
  },
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTaskForm,
  },
});

export const TaskFormData = (state) => state.task.task;
export const tasks = (state) => state.task.tasks;
export const { updateTaskForm: UpdateTaskForm } = taskSlice.actions;

export default taskSlice.reducer;
