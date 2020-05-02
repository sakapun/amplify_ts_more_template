import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { AuthState } from "@aws-amplify/ui-components/dist/types/";

export const useCheckLogin = (
  defaultState: boolean = false
): [boolean, (nextAuthState: AuthState, data?: object) => void] => {
  const [isLogin, setIsLogin] = useState<boolean>(defaultState);
  useEffect(() => {
    (async () => {
      const res = await Auth.currentCredentials();
      setIsLogin(res.authenticated);
    })();
  }, []);
  const onStateChangedCallback = (nextAuthState: AuthState, data?: object) => {
    if (nextAuthState === AuthState.SignIn) {
      setIsLogin(true);
      // console.log(isLogin)
    } else if (nextAuthState === AuthState.SignedOut) {
      setIsLogin(false);
      // console.log(isLogin)
    }
  };
  return [isLogin, onStateChangedCallback];
};
