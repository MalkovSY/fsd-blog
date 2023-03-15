import { fireEvent, screen } from '@testing-library/react';
import {
  allTestProviders,
} from 'shared/config/tests/allTestProviders/allTestProviders';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render properly', () => {
    allTestProviders(<Counter />, { counter: { value: 12 } });
    expect(screen.getByTestId('counterValueTitle')).toHaveTextContent('12');
  });

  test('increment', () => {
    allTestProviders(<Counter />, { counter: { value: 12 } });
    expect(screen.getByTestId('counterValueTitle')).toHaveTextContent('12');

    fireEvent.click(screen.getByTestId('counterIncBtn'));

    expect(screen.getByTestId('counterValueTitle')).toHaveTextContent('13');
  });

  test('decrement', () => {
    allTestProviders(<Counter />, { counter: { value: 12 } });
    expect(screen.getByTestId('counterValueTitle')).toHaveTextContent('12');

    fireEvent.click(screen.getByTestId('counterDecBtn'));

    expect(screen.getByTestId('counterValueTitle')).toHaveTextContent('11');
  });
});
