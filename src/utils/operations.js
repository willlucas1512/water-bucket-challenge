export const calculateGCD = (pA, pB) => {
  while (pB !== 0) {
    const xTemp = pB;
    pB = pA % pB;
    pA = xTemp;
  }
  return Math.abs(pA);
};

export const isEvenNumber = (pA) => {
  if (pA % 2 === 0) {
    return true;
  }
  return false;
};
