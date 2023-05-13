import React, { useState, useEffect } from "react";
import { useMetamask } from "./useMetamask";
import { roundNumber } from "../lib/numberLib";



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