import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './ticket/ticket.slice';
import globalReducer from './global/global.slice';
import projectReducer from './project/project.slice';
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    global: globalReducer,
    project: projectReducer,
  },
});

export default store;
