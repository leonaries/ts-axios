import { AxiosRequestConfig} from './types'
import xhr from './xhr.ts'
import { buildURL } from './helpers/url.ts'
import { transformRequest } from './helpers/data.ts'
import { processHeaders } from './helpers/headers.ts'
function axios(config:AxiosRequestConfig):void {
  //TODO
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig):void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = tranformRequestData(config)
}

function transformURL(config:AxiosRequestConfig):string {
    const { url , params} = config
    return buildURL(url, params)
}

function tranformRequestData(config:AxiosRequestConfig):any {
  return transformRequest(config.data)
}

function transformHeaders(config:AxiosRequestConfig):any {
  const {headers = {} , data } = config
  return processHeaders(headers, data)
}

export default axios
