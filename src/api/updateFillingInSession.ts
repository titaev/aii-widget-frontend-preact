export const updateFillingInSession = ({
  widgetId,
  sessionId,
  fillingId,
  fillingData,
}: {
  widgetId: string;
  sessionId: string;
  fillingId: string;
  fillingData: any;
}) => {
  return fetch(
    `${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/session/${sessionId}/filling/${fillingId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(fillingData),
      headers: { 'content-type': 'application/json' },
    },
  );
};
