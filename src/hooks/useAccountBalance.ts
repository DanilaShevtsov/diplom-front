import React, { useState, useEffect } from "react";
import { useMetamask } from "./useMetamask";


function roundNumber(num: number, decimals: number, digits: number): number {
  const dividedNumber: number = num / Math.pow(10, decimals);
  return Number(dividedNumber.toFixed(digits));
}

export function useAccountBalance(account: string) {
  const { getBalance } = useMetamask();
  const [balance, setBalance] = useState<number>(0);
  
  async function getUserBalance() {
    const balance = Number(await getBalance(account));
    setBalance(roundNumber(balance, 18, 4));
  }

  useEffect(() => {
    getUserBalance();
  })

  return balance;
}