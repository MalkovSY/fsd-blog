import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoading } from './getLoading';

describe('getLoading', () => {
  it('return loading true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoading(state as StateSchema))
      .toBe(true);
  });

  it('return loading false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };

    expect(getLoading(state as StateSchema))
      .toBe(false);
  });

  it('return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoading(state as StateSchema))
      .toBe(undefined);
  });
});
