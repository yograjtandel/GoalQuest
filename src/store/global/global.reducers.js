export const updateHeading = (state, action) => {
  state.heading = action.payload;
};

export const updateGlobalData = (state, action) => {
  const { key, value } = action.payload;
  state[key] = value;
};
