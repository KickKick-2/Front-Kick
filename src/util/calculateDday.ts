export const calculateDday = (target: string) => {
  const currentDate = new Date();
  const targetDate = new Date(target);

  if (isNaN(targetDate.getTime())) {
    console.error('Invalid date Format');
    return undefined;
  }

  const oneDayInMillis = 1000 * 60 * 60 * 24;

  const timeDiff = targetDate.getTime() - currentDate.getTime();
  const dDay = Math.floor(timeDiff / oneDayInMillis);

  return dDay;
};

export const splitDays = (day: Date | undefined) => {
  if (day !== undefined) {
    const str = day.toLocaleString();
    const parts = str.split(' ');
    parts.pop();
    parts.pop();

    return parts.join('');
  }
};
