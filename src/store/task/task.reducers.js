export const createTask = (task) => {
  return async (dispatch) => {};
};

export const updateTask = (task, taskId) => {
  return async (dispatch) => {};
};

export const updateTaskForm = (state, action) => {
  const { key, value } = action.payload;
  state.task = { ...state.task, [key]: value };
};
