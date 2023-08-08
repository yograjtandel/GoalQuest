import { createSlice } from '@reduxjs/toolkit';
import { updateUserForm, setFormMode } from './user.reducers';
import { GetUsers } from './user.action';

const initialState = {
  users: [],
  form: {
    name: '',
    email: '',
    reporting_manager: '',
    password: '',
    company: '',
    role: '',
  },
  other: {
    form_mode: {},
  },
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserForm,
    setFormMode,
  },
  extraReducers: (builder) => {
    builder.addCase(GetUsers.fulfilled, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

export const UserFormData = (state) => state.user.form;
export const UserOtherData = (state) => state.user.other;
export const Users = (state) => state.user.users;

export const { updateUserForm: UpdateUserForm, setFormMode: SetFormMode } =
  userSlice.actions;

export default userSlice.reducer;
