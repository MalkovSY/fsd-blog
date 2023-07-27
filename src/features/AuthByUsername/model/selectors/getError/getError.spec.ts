import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getError', () => {
  it('return error', () => {
    const errorMsg = 'get error';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: errorMsg,
      },
    };
    expect(getError(state as StateSchema))
      .toBe(errorMsg);
  });

  it('return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getError(state as StateSchema))
      .toBe(undefined);
  });
});
