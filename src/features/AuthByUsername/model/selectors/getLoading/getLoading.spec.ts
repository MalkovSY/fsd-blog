import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoading } from './getLoading';

describe('getLoading', () => {
  it('return loading true', () => {
    const store: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoading(store as StateSchema))
      .toBe(true);
  });

  it('return loading false', () => {
    const store: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };

    expect(getLoading(store as StateSchema))
      .toBe(false);
  });
});
