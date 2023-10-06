import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const initialAsyncReducers = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={
      {
        ...initialAsyncReducers,
        ...asyncReducers,
      } as DeepPartial<ReducersMapObject<StateSchema>> // TODO: fix types
    }
  >
    <Story />
  </StoreProvider>
);
