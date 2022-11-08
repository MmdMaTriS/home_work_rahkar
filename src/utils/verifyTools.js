export const checkEmail = (email) => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = pattern.test(email);
  return isValid;
};
