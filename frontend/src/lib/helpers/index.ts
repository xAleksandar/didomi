export const manageAgreementCheck = (
  agreement: string,
  agreementsArray: string[]
) => {
  const isPresent = agreementsArray.includes(agreement);

  const updatedArray = isPresent
    ? agreementsArray.filter((item) => item !== agreement)
    : [...agreementsArray, agreement];

  return updatedArray;
};
