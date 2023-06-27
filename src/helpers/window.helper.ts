import history from '../core/history/history';

const getHistory = () => window['Motek_history'] ?? history;

const getApiSDK = () => window['MotekSDK'];

export { getHistory, getApiSDK };
