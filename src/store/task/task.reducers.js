export const updateTaskForm = (state, action) => {
  const { key, parent_key, value } = action.payload;
  debugger;
  if (parent_key) {
    state[parent_key] = { ...state[parent_key], [key]: value };
    return;
  }
  //   if(key==="assi")
  state[key] = { ...state[key], ...value };
};

export const setIntialTaskData = (state, action) => {
  state.task = { ...state.task, ...action.payload.data };
  const task_list = state.tasks.reduce(
    (base, task) => [...base, ...task.tasks],
    []
  );

  state.parentTasks = task_list.filter((task) => {
    return action.payload.data.parent_task.includes(task._id);
  });

  state.childTasks = task_list.filter((task) => {
    return action.payload.data.child_task.includes(task._id);
  });
};

export const setIntialParentTaskData = (state, action) => {
  state.parent_task = { ...state.parent_task, ...action.payload.data };
};

export const setIntialChildTaskData = (state, action) => {
  state.child_task = { ...state.child_task, ...action.payload.data };
};

export const setFormMode = (state, action) => {
  state.other.form_mode = {
    ...action.payload,
  };
};

export const setTasks = (state, action) => {
  state.tasks = [...action.payload];
};
