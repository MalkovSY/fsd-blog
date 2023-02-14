import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './App/App';

import 'shared/config/i18nConfig/i18nConfig';

render(
  <BrowserRouter>
    <ErrorBoundary useSuspense={false}>
      <ThemeProvider>
        <Suspense fallback="Перевод...">
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
