export function getFullMonth(month: any) {
  const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
		  'August', 'September', 'October', 'November', 'December'];
  return months[parseInt(month, 10)];
};

export function getShortDays() {
  return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
};

export function getMonthNumberByShortName(month: string) {
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return months.indexOf(month) !== -1 ? months.indexOf(month) : null;
};