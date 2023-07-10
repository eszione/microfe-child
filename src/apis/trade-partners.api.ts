import { download } from "../core/utils/download";
import { getApiSDK } from "../helpers/window.helper";

export async function listTradePartners ({ ...params }): Promise<any> {
    return await getApiSDK().api.get(
        '/agents',
        { 
            params,
        },
    );
}

export async function exportTradePartners ({ postSearchRequestAgent }): Promise<any> {
    try {
        const result = await getApiSDK().api.post(
            '/agents/export',
            { 
                ...postSearchRequestAgent,
                    subGroupIds: postSearchRequestAgent.subGroupIds?.split(','),
            },
        );
    
        const blobURL =
            window.URL && window.URL.createObjectURL
                ? window.URL.createObjectURL(
                        new Blob([result], { type: 'application/octet-stream' }),
                    )
                : window.webkitURL.createObjectURL(result);
    
        download(blobURL, 'agents.csv');
    } catch (error) {
        console.error(error);
    }
}
