export async function listCustomers ({ ...params }): Promise<any> {
    return await window['MotekSDK'].api.get(
        '/profiles/search',
        { 
            params,
        },
    );
}
