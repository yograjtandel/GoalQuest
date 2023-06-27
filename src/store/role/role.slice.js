import { createSlice } from '@reduxjs/toolkit';
import { updateTicketForm } from './role.reducers';

const initialState = {
  tickets: [],
  ticket: {
    name: "",
      rights: "",
      createdBy:"",
  },
};
const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    updateTicketForm,
  },
});

export const ticket = (state) => state.ticket;
export const tickets = (state) => state.tickets;

export const { UpdateTicketForm } = ticketSlice.actions;

export default ticketSlice.reducer;
