import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
  it('return username', () => {
    const username = 'username';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username,
      },
    };

    expect(getUsername(state as StateSchema))
      .toBe(username);
  });

  it('return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUsername(state as StateSchema))
      .toBe(undefined);
  });
});
