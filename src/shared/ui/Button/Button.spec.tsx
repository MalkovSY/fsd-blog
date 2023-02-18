import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button tests', () => {
  it('Button render properly', () => {
    render(<Button>test btn</Button>);

    expect(screen.getByText('test btn')).toBeInTheDocument();
  });
});
