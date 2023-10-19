import AstroSDK from 'astro-sso-sdk';
import history from '../history/history';

const getHistory = () => window['Motek_history'] ?? history;

const getApiSDK = () => window['MotekSDK'] ?? AstroSDK;

const getHostState = () => window['host_state']; // ?? MockHostState

export { getHistory, getApiSDK, getHostState };
