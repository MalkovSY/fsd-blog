import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('sidebar render properly', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument();
  });

  test('sidebar toggle test', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument();
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebarTestId')).toHaveClass('collapsed');
  });
});
