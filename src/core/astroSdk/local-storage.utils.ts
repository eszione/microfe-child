import { LocalStorage } from "../../constants/local-storage";
import { IConfig } from "../../types/config";

export const setupOicd = (config: IConfig) => {
    const tempOicdKey = LocalStorage.oidcKey;
    const tempOicd = localStorage.getItem(tempOicdKey);
    if (tempOicd) {
      localStorage.setItem(tempOicdKey.replace(LocalStorage.envVar, config.env).replace(LocalStorage.clientIdVar, config.clientId), tempOicd);
      localStorage.removeItem(tempOicdKey);
    }
};
