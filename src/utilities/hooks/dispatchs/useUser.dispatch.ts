import { UserContext } from "@contexts";
import { 
    fetchCreateAccountRequest, 
    fetchLoginRequest,
} from "@services";
import { User } from "@utilities/types";
import { useCallback, useContext } from "react";

export const useUserDispatch = ()=> {

    const { setUser, setSigninError, setSignupError } = useContext(UserContext);

    const onSignin = useCallback(async(email: string, password: string)=> {
        const result = await fetchLoginRequest({email,password});

        if(result.code === 200){
            const user = result.data as User;
            setUser(user);
        } else {
            setUser(null);
            setSigninError(result.data);
        }
    }, [
        setUser,
        setSigninError,
    ]);

    const onCreateUser = useCallback(async(user: User)=> {
        const result = await fetchCreateAccountRequest(user);

        if(result.code === 200){
            const user = result.data as User;
            setUser(user);
        } else {
            setUser(null);
            setSignupError(result.data);
        }
    }, [
        setUser,
        setSignupError,
    ]);
    
    return {
        onSignin,
        onCreateUser,
    }
}
