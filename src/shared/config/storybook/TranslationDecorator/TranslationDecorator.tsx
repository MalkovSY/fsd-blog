import { Suspense } from 'react';
import { Story } from '@storybook/react';
import i18n from 'shared/config/i18nConfig/i18nConfig';
import { I18nextProvider } from 'react-i18next';

export const TranslationDecorator = (Story: Story) => (
  <Suspense fallback="">
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
