export const sumOfData = (data, field) => {
  return data
    .filter((itm) => itm[field])
    ?.reduce((acc, obj) => parseFloat(acc) + parseFloat(obj[field]), 0);
};
