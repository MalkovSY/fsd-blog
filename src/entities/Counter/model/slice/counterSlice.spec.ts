import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  it('increment', () => {
    const state: CounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
  });

  it('decrement', () => {
    const state: CounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
