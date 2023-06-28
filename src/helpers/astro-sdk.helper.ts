import AstroSDK from 'astro-sso-sdk';
import { AstroSettings } from 'astro-sso-sdk/dist/common/utils';
import { IConfig } from '../types/config';
import { SetupOicd } from './local-storage.helper';

export const SetupAstroSDK = async (): Promise<boolean> => {
    const config = await fetch('/config.json');

    const configJson: IConfig = await config.json();

    const opts: AstroSettings = {
        autoSilentLogin: false,
        clientId: configJson.clientId,
        env: configJson.env,
        isSPA: true,
        silentRedirectUri: `${window.location.protocol}//${window.location.host}/callback.html?silent`,
    };

    SetupOicd(configJson);

    await AstroSDK.setup(opts).catch(e => {
        console.error(e);
    });

    return false;
};
