export const formatDate = (dateString, includeYear) => {
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "numeric",
  };
  if (includeYear) {
    options.year = "numeric";
  }
  return date.toLocaleDateString("da-DK", options);
};


export const PriceToDK = (num) => {
  return Number(num).toLocaleString('da-DK')
}