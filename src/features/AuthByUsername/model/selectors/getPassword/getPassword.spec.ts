import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getPassword', () => {
  it('return password', () => {
    const password = 'password';
    const store: DeepPartial<StateSchema> = {
      loginForm: {
        password,
      },
    };

    expect(getPassword(store as StateSchema))
      .toBe(password);
  });
});
