export const convertLeadDataToQueryParams = (leadData: any) => {
  const params: string[] = [];

  leadData.forEach((item: any) => {
    const param = `${encodeURIComponent(item.title)}=${encodeURIComponent(item.value)}`;
    params.push(param);
  });
  return params.join('&');
};
