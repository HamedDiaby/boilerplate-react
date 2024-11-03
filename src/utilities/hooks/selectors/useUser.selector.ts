import { UserContext } from "@contexts";
import { useContext } from "react";

export const useUserSelector = ()=> {

    const { user, signinError, signupError } = useContext(UserContext);

    return {
        user,
        signinError,
        signupError,
    }
}
