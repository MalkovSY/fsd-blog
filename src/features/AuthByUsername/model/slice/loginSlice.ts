import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../../model/types/LoginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login/AuthByUsername',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    authSubmit: (state) => {
      console.log('state', state.password);
      console.log('state2', state.username);
    },
  },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
