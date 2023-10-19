import { ENVIRONMENT } from "astro-sso-sdk/dist/common/constants";

export interface IConfig {
    clientId: string;
    env: ENVIRONMENT;
}
