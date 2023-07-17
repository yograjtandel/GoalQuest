export const createTask = (task) => {
  return async (dispatch) => {};
};

export const updateTask = (task, taskId) => {
  return async (dispatch) => {};
};

export const updateTaskForm = (state, action) => {
  const { key, parent_key, value } = action.payload;
  if (parent_key) {
    state[parent_key] = { ...state[parent_key], [key]: value };
    return;
  }
  state[key] = { ...state[key], ...value };
};
