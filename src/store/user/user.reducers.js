export const updateUserForm = (state, action) => {
  const { key, value } = action.payload;
  state.form = { ...state.form, [key]: value };
};

export const setFormMode = (state, action) => {
  state.other.form_mode = {
    ...action.payload,
  };
};
