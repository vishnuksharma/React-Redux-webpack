export const formatDate = date => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'];
  const dt = new Date(date);
  return dt.getDate() + " " + month[(dt.getMonth() - 1)] + " " + dt.getFullYear();
};