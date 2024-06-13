const localeTexts = {
  ru: {
    copy: 'Копировать',
    reset: 'Сбросить',
    more: 'Ещё',
    stop: 'Стоп',
    modelLoadErrorNotification: 'Ошибка. Попробуйте позднее',
    requiredError: 'Обязательное поле',
    incorrectEmail: 'Некорректный адрес почты',
    defaultCtaText: 'Ответ ИИ будет здесь',
  },
  en: {
    copy: 'Copy',
    reset: 'Reset',
    more: 'More',
    stop: 'Stop',
    modelLoadErrorNotification: 'Error. Try later',
    requiredError: 'The field is required',
    incorrectEmail: 'Incorrect email',
    defaultCtaText: 'AI answer will be here',
  },
};
export const locale =
  localeTexts[(navigator?.language as keyof typeof localeTexts) || 'en'] || localeTexts.en;
