import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/task.slice';
import globalReducer from './global/global.slice';
import projectReducer from './project/project.slice';
import stageReducer from './stage/stage.slice';
import roleReducer from './role/role.slice';
import tageReducer from './tag/tag.slice';
const store = configureStore({
  reducer: {
    task: taskReducer,
    global: globalReducer,
    project: projectReducer,
    stage: stageReducer,
    role: roleReducer,
    tag: tageReducer,
  },
});

export default store;
