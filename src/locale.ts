const localeTexts = {
  ru: {
    copy: 'Копировать',
    reset: 'Сбросить',
    more: 'Ещё',
    stop: 'Стоп',
  },
  en: {
    copy: 'Copy',
    reset: 'Reset',
    more: 'More',
    stop: 'Stop',
  },
}
export const locale =
  localeTexts[(navigator?.language as keyof typeof localeTexts) || 'en'] ||
  localeTexts.en
