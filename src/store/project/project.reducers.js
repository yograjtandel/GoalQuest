export const updateProjectForm = (state, action) => {
  const { key, value } = action.payload;
  state.form = { ...state.form, [key]: value };
};

export const setIntialProjectData = (state, action) => {
  state.form = { ...state.form, ...action.payload.data };
};

export const setFormMode = (state, action) => {
  state.other.form_mode = {
    ...action.payload,
  };
};

export const setProjects = (state, action) => {
  state.projects = [...action.payload];
};
