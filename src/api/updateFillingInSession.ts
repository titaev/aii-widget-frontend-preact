export const updateFillingInSession = ({widgetId, sessionId, fillingId, fillingData}: {
    widgetId: number, sessionId: number, fillingId: number, fillingData: any
}) => {
    return fetch(
        `${process.env.REACT_APP_BE_API_URL}/lead_forms/${widgetId}/session/${sessionId}/filling/${fillingId}`,
        {
            method: 'PATCH',
            body: JSON.stringify(fillingData),
            headers: {'content-type': 'application/json'},
        }
    )
}