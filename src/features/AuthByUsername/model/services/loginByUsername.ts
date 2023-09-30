import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

interface LoginByUsernameProps {
  username: string,
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/AuthByUsername',
  async (authData, thunkAPI) => {
    const { extra: { api, navigate }, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await api.post('/login', authData);

      if (!response.data) {
        throw new Error('WTF');
      }

      dispatch(userActions.setAuthData(response.data));
      navigate(RouterPath.profile);

      return response.data;
    } catch (error) {
      console.error('login/AuthByUsername ERROR 2', error);
      return rejectWithValue('AUTH ERROR');
    }
  },
);
