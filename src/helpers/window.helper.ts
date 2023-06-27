import AstroSDK from 'astro-sso-sdk';
import history from '../core/history/history';

const getHistory = () => window['Motek_history'] ?? history;

const getApiSDK = () => window['MotekSDK'] ?? AstroSDK;

export { getHistory, getApiSDK };
