const localeTexts = {
    ru: {
        copy: 'Копировать',
        reset: 'Сбросить',
        more: 'Ещё',
        stop: 'Стоп',
        modelLoadErrorNotification: 'Ошибка. Попробуйте позднее'
    },
    en: {
        copy: 'Copy',
        reset: 'Reset',
        more: 'More',
        stop: 'Stop',
        modelLoadErrorNotification: 'Error. Try later'
    },
}
export const locale =
    localeTexts[(navigator?.language as keyof typeof localeTexts) || 'en'] ||
    localeTexts.en
