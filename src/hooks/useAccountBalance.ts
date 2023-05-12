import React, { useState, useEffect } from "react";
import { useMetamask } from "./useMetamask";



export function useAccountBalance(account: string) {
  const { getBalance } = useMetamask();
  const [balance, setBalance] = useState('');
  
  async function getUserBalance() {
    const balance = await getBalance(account);
    setBalance(balance);
  }

  useEffect(() => {
    getUserBalance();
  })

  return balance;
}