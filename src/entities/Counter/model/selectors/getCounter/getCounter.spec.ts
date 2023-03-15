import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 5 },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 5 });
  });
});
