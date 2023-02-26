import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
  allTestProviders,
} from 'shared/config/tests/allTestProviders/allTestProviders';

describe('Sidebar', () => {
  test('sidebar render properly', () => {
    allTestProviders(<Sidebar />);
    expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument();
  });

  test('sidebar toggle test', () => {
    allTestProviders(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument();
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebarTestId')).toHaveClass('collapsed');
  });
});
