import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getError', () => {
  it('return error', () => {
    const errorMsg = 'get error';
    const store: DeepPartial<StateSchema> = {
      loginForm: {
        error: errorMsg,
      },
    };
    expect(getError(store as StateSchema))
      .toBe(errorMsg);
  });
});
