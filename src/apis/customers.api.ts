import { getApiSDK } from "../helpers/window.helper";

export async function listCustomers ({ ...params }): Promise<any> {
    return await getApiSDK().api.get(
        '/profiles/search',
        { 
            params,
        },
    );
}
