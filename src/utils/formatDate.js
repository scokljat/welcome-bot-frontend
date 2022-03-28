import format from 'date-fns/format';

const formatDate = (date, typeFormat) => {
  return format(new Date(date), typeFormat);
};
export default formatDate;
