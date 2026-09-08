import type { Preview } from '@storybook/preact-vite'
import '../src/styles.css'
import { useI18n } from '../src/lib/i18n'
import type { I18n } from '../src/lib/i18n'

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'es', title: 'Español' },
      ],
      showName: true,
    },
  },
}

export const initialGlobals = {
  locale: 'en',
}

const withI18n = (Story: any, context: any) => {
  const locale = context.globals.locale || 'en'
  const i18n: I18n = useI18n(locale as 'en' | 'es')
  return <Story args={{ ...context.args, i18n }} />
}

const preview: Preview = {
  decorators: [withI18n],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;