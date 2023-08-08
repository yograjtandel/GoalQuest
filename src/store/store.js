import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/task.slice';
import globalReducer from './global/global.slice';
import projectReducer from './project/project.slice';
import stageReducer from './stage/stage.slice';
import roleReducer from './role/role.slice';
import tageReducer from './tag/tag.slice';
import userReducer from './user/user.slice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    global: globalReducer,
    project: projectReducer,
    stage: stageReducer,
    role: roleReducer,
    tag: tageReducer,
    user: userReducer,
  },
});

export default store;
