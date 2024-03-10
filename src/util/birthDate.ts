const currentYear = new Date().getFullYear();

export const yearsArray = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, index) => currentYear - index
);

export const monthsArray = Array.from({ length: 12 }, (_, index) => 1 + index);

export const daysArray = Array.from({ length: 31 }, (_, index) => 1 + index);
