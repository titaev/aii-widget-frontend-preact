export const addLeadEmailAnswerStrategy = ({
  widgetId,
  sessionId,
  fillingId,
  leadData,
}: {
  widgetId: string;
  sessionId: string;
  fillingId: string;
  leadData: any;
}) => {
  return fetch(
    `${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/session/${sessionId}/filling/${fillingId}/send_email/`,
    {
      method: 'POST',
      body: JSON.stringify(leadData),
      headers: { 'content-type': 'application/json' },
    },
  );
};
