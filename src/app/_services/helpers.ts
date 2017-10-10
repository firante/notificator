export function getFullMonth(month: any) {
  const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
		  'August', 'September', 'October', 'November', 'December'];
  return months[parseInt(month, 10)];
};

export function getShortDays() {
  return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
};
