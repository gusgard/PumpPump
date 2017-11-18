const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

export const isDev = env === DEV;
export const isTest = env === 'test';

if (isDev) {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

const urls = {
  development: 'http://localhost:3000',
  test: 'http://localhost:3000',
  production: 'http://localhost:3000',
};

export const API_URL = urls[env];
