export const updateProjectForm = (state, action) => {
  state.ticket = { ...state.form, ...action.apyload };
};
