import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
  it('return username', () => {
    const username = 'username';
    const store: DeepPartial<StateSchema> = {
      loginForm: {
        username,
      },
    };

    expect(getUsername(store as StateSchema))
      .toBe(username);
  });
});
