import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 5 },
    };

    expect(getCounterValue(state as StateSchema)).toBe(5);
  });
});
