import { 
    FetchRequestType, 
    FetchResponseType,
} from "@utilities/types";

// FR: Définit une fonction asynchrone pour effectuer des requêtes HTTP.
// EN: Defines an async function to perform HTTP requests.
export const fetchRequest = async ({
    route,           
    method,         
    accessToken,     
    data,
    isFormData,           
}: FetchRequestType): Promise<FetchResponseType> => {

    const headers = {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        'ngrok-skip-browser-warning': '1', // pour le tunnel grok
    };

    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}${route}`, {
            method,
            headers,
            body: isFormData ? data : JSON.stringify(data),
        });

        if (!response.ok) {

            return {
                code: 500,
                data: response.statusText
            };
        }

        const responseData = await response.json();
        return {
            code: 200,
            data: responseData,
        };

    } catch (error: any) {
        return {
            code: 500,
            data: error.message || 'An error occurred'
        };
    }
}
