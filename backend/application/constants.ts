import configurations from '../configurations';

export const APPLICATION_PORT = configurations.APPLICATION_PORT;
export const APPLICATION_HOST = configurations.APPLICATION_HOST;
export const EXPRESS_JSON_CONFIGURATIONS = { limit: '10mb', type: ['application/json', 'application/vnd.api+json']}