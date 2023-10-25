import { useEffect, useState, useRef } from "react";
import SocialLogin from "@biconomy/web3-auth";

const Wallet = () => {
  const sdkRef = useRef<SocialLogin | null>(null);
  const [interval, enableInterval] = useState(false);

  // login() function
  // setupSmartAccount() function

  useEffect(() => {
    let configureLogin: NodeJS.Timeout | undefined;
    if (interval) {
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          // setupSmartAccount();
          clearInterval(configureLogin);
        }
      }, 1000);
    }
  }, [interval]);
};
