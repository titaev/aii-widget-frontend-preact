export const createSession = (widgetId: string) => {
  return fetch(`${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/session/`, {
    method: 'POST',
    body: JSON.stringify({
      device: navigator.platform,
    }),
    headers: { 'content-type': 'application/json' },
  });
};
