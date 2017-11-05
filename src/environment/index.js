const DEV = 'development'
const env = process.env.NODE_ENV || DEV

export const isDev = env === DEV
export const isTest = env === 'test'

if (isDev) {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
}

let api = { urls: { test: 'https://FAKE_URL.com' }, params: {} }
try {
  if (!isTest) {
    api = require('./api.config').default
  }
} catch (e) {
  console.error('API config missing')
}

export const API_URL = api.urls[env]
export const API_PARAMS = api.params
