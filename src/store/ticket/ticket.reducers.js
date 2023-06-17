export const createTicket = (ticket) => {
  return async (dispatch) => {};
};

export const updateTicket = (ticket, ticketId) => {
  return async (dispatch) => {};
};

export const updateTicketForm = (state, action) => {
  state.ticket = { ...state.ticket, ...action.apyload };
};
