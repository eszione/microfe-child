import { getApiSDK } from "../../core/window/window.utils";

export async function listCustomers ({ ...params }): Promise<any> {
    return await getApiSDK().api.get(
        '/profiles/search',
        { 
            params,
        },
    );
}
