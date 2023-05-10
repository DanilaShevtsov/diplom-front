import { useEffect, useState } from "react"
import { useMetamask } from "../../hooks/useMetamask";
import { auth } from "../../lib/auth";
import { AuthJWT } from "../../interfaces/auth";

import { Button } from "react-bootstrap";

import "./index.css";


export function Metamask() {
    
    const { signMessage, hooks, connectMetamask, metamask } = useMetamask();
    const { getWelcomeToken, login, verifyLogin } = auth();
    const { useAccount, useIsActive, useIsActivating } = hooks;
    
    const [autorized, setAuthorized] = useState<boolean>(false);
    const userAccount: string = useAccount() as string;
    
    const isActive: boolean = useIsActive();
    const isActivating: boolean = useIsActivating();

    useEffect(() => {
        if (!isActive && !isActivating) {
            metamask.connectEagerly();
        }
    })

    async function loginWeb3() {
        const message:string = await getWelcomeToken(userAccount);
        const signature: string = await signMessage(message, userAccount);
        const jwt: AuthJWT = await login(message, userAccount, signature);
        const authorized: boolean = await verifyLogin(jwt);

        setAuthorized(authorized);

        if (!authorized) {
            console.log('something went wrong');
        }
    }
    
    return (
        <div className="metamask-container">
            <div>
                <Button variant="primary"
                    onClick={ () => connectMetamask() }
                >Connect Metamask</Button>
            </div>

            <p>UserAccount: {userAccount}</p>

            <button
                onClick = { loginWeb3 }
                className="login-button"
            >Login</button>
            <p
                className="is-authorized-p"
            >Is Authorized: { autorized.toString() }</p>
        </div>
    )
}