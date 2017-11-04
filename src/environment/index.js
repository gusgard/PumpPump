const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

export const isDev = env === DEV;

if (isDev) {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

let api = {
  urls: {},
  params: {},
};
try {
  api = require('./api.config').default;
} catch (e) {
  console.error('API config missing');
}

export const API_URL = api.urls[env];
export const API_PARAMS = api.params;
