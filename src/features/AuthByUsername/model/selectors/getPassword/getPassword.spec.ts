import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';
import { LoginSchema } from '../../types/LoginSchema';

describe('getPassword', () => {
  it('return password', () => {
    const password = 'password';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password,
      } as LoginSchema,
    };

    expect(getPassword(state as StateSchema))
      .toBe(password);
  });

  it('return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getPassword(state as StateSchema))
      .toBe(undefined);
  });
});
