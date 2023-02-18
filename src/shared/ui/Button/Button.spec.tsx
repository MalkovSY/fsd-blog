import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button tests', () => {
  it('Button render properly', () => {
    render(<Button>test btn</Button>);

    expect(screen.getByTestId('buttonTestId')).toBeInTheDocument();
  });

  it('Test button theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>clear</Button>);

    expect(screen.getByTestId('buttonTestId')).toHaveClass('clear');
  });
});
