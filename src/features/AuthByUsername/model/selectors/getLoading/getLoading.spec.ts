import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoading } from './getLoading';
import { LoginSchema } from '../../types/LoginSchema';

describe('getLoading', () => {
  it('return loading true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      } as LoginSchema,
    };

    expect(getLoading(state as StateSchema))
      .toBe(true);
  });

  it('return loading false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      } as LoginSchema,
    };

    expect(getLoading(state as StateSchema))
      .toBe(false);
  });

  it('return false with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoading(state as StateSchema))
      .toBe(false);
  });
});
