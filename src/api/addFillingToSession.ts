export const addFillingToSession = ({
  widgetId,
  sessionId,
  fillingData,
}: {
  widgetId: string;
  sessionId: string;
  fillingData: any;
}) => {
  return fetch(
    `${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/session/${sessionId}/filling/`,
    {
      method: 'POST',
      body: JSON.stringify(fillingData),
      headers: { 'content-type': 'application/json' },
    },
  );
};
