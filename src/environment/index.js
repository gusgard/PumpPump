const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

export const isDev = env === DEV;
export const isTest = env === 'test';

if (isDev) {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}
