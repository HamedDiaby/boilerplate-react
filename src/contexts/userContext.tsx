import { ErrorType, User } from "@utilities/types";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

enum persistDataEnum {
    user = 'user',
}

interface IUserContextProvider {
    children: ReactNode
}

interface IUserContext {
    user: User | null
    setUser: React.Dispatch<User | null>
    signinError: ErrorType | null
    setSigninError: React.Dispatch<ErrorType | null>
    signupError: ErrorType | null
    setSignupError: React.Dispatch<ErrorType | null>
}

export const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => {},
    signinError: null,
    setSigninError: () => {},
    signupError: null,
    setSignupError: () => {},
});

export const UserContextProvider:FC<IUserContextProvider> = ({ children })=> {

    const [user, setUser] = useState<User | null>(()=> {
        const savedUserData = localStorage.getItem(persistDataEnum.user);
        return savedUserData ? JSON.parse(savedUserData) : null;
    });
    const [signinError, setSigninError] = useState<ErrorType | null>(null);
    const [signupError, setSignupError] = useState<ErrorType | null>(null);

    useEffect(()=> {
        localStorage.setItem(persistDataEnum.user, JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider 
            value={{ 
                user, setUser, 
                signinError, setSigninError,
                signupError, setSignupError,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}