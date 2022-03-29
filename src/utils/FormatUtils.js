import format from 'date-fns/format';
const FormatUtils = {
  formatDate(date, typeFormat) {
    return format(new Date(date), typeFormat);
  },
  formatActive(isActive) {
    switch (isActive) {
      case true:
        return 'Active';
      case false:
        return 'Inactive';
      case 'Active':
        return true;
      case 'Inactive':
        return false;
    }
  },
};
export default FormatUtils;
