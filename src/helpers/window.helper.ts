import AstroSDK from 'astro-sso-sdk';
import history from '../core/history/history';

const getHistory = () => window['Motek_history'] ?? history;

const getApiSDK = () => window['MotekSDK'] ?? AstroSDK;

const getHostStore = () => window['host_store'];

export { getHistory, getApiSDK, getHostStore };
