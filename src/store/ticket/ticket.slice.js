import { createSlice } from '@reduxjs/toolkit';
import { updateTicketForm } from './ticket.reducers';

const initialState = {
  tickets: [],
  ticket: {
    title: '',
    project_id: '',
    deadline: new Date(),
    description: '',
    priority: '',
    createdBy: '',
    asignee: '',
    parent_task: '',
    child_task: [],
    stage: '',
    tag: '',
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
