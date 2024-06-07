export const addLeadToSession = ({widgetId, sessionId, leadData}: {
    widgetId: number,
    sessionId: number,
    leadData: any
}) => {
    return fetch(
        `${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/session/${sessionId}/lead/`,
        {
            method: 'POST',
            body: JSON.stringify(leadData),
            headers: {'content-type': 'application/json'},
        }
    )
}