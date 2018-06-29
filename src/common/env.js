let baseUrl = ''
let routerMode = 'history'
let apiUrl = window.location.origin
let isDebug = false
let salt = 'aggregatenews'
if(process.env.NODE_ENV == 'production'){
  apiUrl = process.env.API_HOST
}

export {
  baseUrl,
  routerMode,
  apiUrl,
  isDebug,
  salt
}
