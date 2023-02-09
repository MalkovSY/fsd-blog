import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './App/App';

import 'shared/config/i18nConfig/i18nConfig';

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="translate...">
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
