import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './ticket/ticket.slice';
import globalReducer from './global/global.slice';
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    global: globalReducer,
  },
});

export default store;
