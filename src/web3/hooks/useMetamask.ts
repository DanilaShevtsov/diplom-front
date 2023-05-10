import  { metamask, hooks } from '../lib/metamask';


export function useMetamask() {

  function connectMetamask() {
    metamask.activate();
  }

  function disconnectMetamask() {
    // metamask.provider.disconnect();
    return true;
  }

  async function signMessage(message: string, account: string): Promise<string> {
    const signature: string = await metamask.provider?.request({ method: 'personal_sign', params: [message, account] }) as string;
    return signature;
  }

  return { connectMetamask, disconnectMetamask, hooks, metamask, signMessage };
}