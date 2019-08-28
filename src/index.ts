import { AxiosRequestConfig , AxiosPromise ,AxiosResponse} from './types'
import xhr from './xhr.ts'
import { buildURL } from './helpers/url.ts'
import { transformRequest , transformResponse } from './helpers/data.ts'
import { processHeaders } from './helpers/headers.ts'
function axios(config:AxiosRequestConfig):AxiosPromise {
  //TODO
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
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

function transformResponseData(res:AxiosResponse):AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
