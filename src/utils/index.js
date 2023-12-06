export const sumOfData = (data, field) => {
  return data
    .filter((itm) => itm[field])
    ?.reduce((acc, obj) => parseFloat(acc) + parseFloat(obj[field]), 0);
};

export const totalSum = (data, field) => {
  const resutls =
    data &&
    data?.length > 0 &&
    data?.reduce((acc, obj) => acc + (+obj[field] || 0), 0);
  return resutls ? resutls?.toFixed(2) : 0;
};
