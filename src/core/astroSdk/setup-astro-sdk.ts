import AstroSDK from 'astro-sso-sdk';
import { AstroSettings } from 'astro-sso-sdk/dist/common/utils';
import { IConfig } from '../../types/config';
import { setupOicd } from './local-storage.utils';

/**
 * Required to make API calls from the standalone microFE
 * @returns loading status
 */
export const setupAstroSDK = async (): Promise<boolean> => {
    const config = await fetch('/config.json');

    const configJson: IConfig = await config.json();

    const opts: AstroSettings = {
        autoSilentLogin: false,
        clientId: configJson.clientId,
        env: configJson.env,
        isSPA: true,
        silentRedirectUri: `${window.location.protocol}//${window.location.host}/callback.html?silent`,
    };

    setupOicd(configJson);

    await AstroSDK.setup(opts).catch(e => {
        console.error(e);
    });

    return false;
};
