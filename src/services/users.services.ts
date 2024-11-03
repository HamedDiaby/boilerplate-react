import { PathsEnum } from "@utilities/enums";
import { fetchRequest } from "@utilities/requests";
import { FetchRequestType, FetchResponseType, User } from "@utilities/types";

export const fetchLoginRequest = async(
    payload: {email: string, password: string}
)=> {
    try {
        const requestConfig:FetchRequestType = {
            route: PathsEnum.LOGIN_USER,
            method: 'POST',
            data: payload
        };

        const response:FetchResponseType = await fetchRequest(requestConfig);
        return response;

    } catch (error: any) {
        console.error('Error in fetchSigninRequest:', error);
        throw error;
    }
}

export const fetchCreateAccountRequest = async(
    payload: User
)=> {
    try {
        const requestConfig:FetchRequestType = {
            route: PathsEnum.CREATE_NEW_USER,
            method: 'POST',
            data: payload
        };

        const response:FetchResponseType = await fetchRequest(requestConfig);
        return response;

    } catch (error: any) {
        console.error('Error in fetchSigninRequest:', error);
        throw error;
    }
}
