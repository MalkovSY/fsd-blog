import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profiles',
  async (_, thunkAPI) => {
    const { extra: { api }, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await api.get<Profile>('/profiles');

      if (!response.data) {
        throw new Error('Profile get method error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('PROFILE ERROR');
    }
  },
);
