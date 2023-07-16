export const updateStageForm = (state, action) => {
  const { key, value } = action.payload;
  state.form = { ...state.form, [key]: value };
};
