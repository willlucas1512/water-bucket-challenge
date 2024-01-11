export const validateInput = (pElements, pControl) => {
  const xInput = pElements.namedItem(pControl);
  const xIsInput = xInput instanceof HTMLInputElement;
  if (!xIsInput || pControl === null) return null;
  return xInput;
};

export const isEmpty = (pValue) => {
  if (
    pValue === null ||
    pValue === undefined ||
    pValue === "" ||
    (Array.isArray(pValue) && pValue.length === 0)
  ) {
    return true;
  }
  return false;
};

export const integerNoNegativeValidator = (pValue) => {
  if (isEmpty(pValue)) {
    return true;
  }
  if (Array.isArray(pValue)) {
    return pValue.every((pVal) => /^[0-9]+$/.test(String(pVal)));
  }
  return /^[0-9]+$/.test(String(pValue)) || false;
};
