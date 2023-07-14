export const updateProjectForm = (state, action) => {
  const { key, value } = action.payload;
  state.form = { ...state.form, [key]: value };
};
