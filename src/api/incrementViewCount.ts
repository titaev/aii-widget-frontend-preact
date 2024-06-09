export const incrementViewCount = (widgetId: string) => {
  return fetch(
    `${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/widget/views/increment/`,
    {
      method: 'POST',
    },
  );
};
