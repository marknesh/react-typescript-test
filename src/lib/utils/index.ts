export const validateDiscountCode = (code: string) => {
  // check if it Matches "DISCOUNT" followed by 4 digits
  const pattern = /^DISCOUNT\d{4}$/;
  return pattern.test(code);
};
