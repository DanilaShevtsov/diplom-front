function roundNumber(num: number, decimals: number, digits: number): number {
  const dividedNumber: number = num / Math.pow(10, decimals);
  return Number(dividedNumber.toFixed(digits));
}

export { roundNumber };