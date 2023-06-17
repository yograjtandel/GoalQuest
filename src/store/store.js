import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticket/ticket.slice";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export default store;
