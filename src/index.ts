import { AxiosRequestConfig} from './types'
import xhr from './xhr.ts'
import { buildURL } from './helpers/url.ts'
function axios(config:AxiosRequestConfig):void {
  //TODO
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig):void {
  config.url = transformURL(config)
}

function transformURL(config:AxiosRequestConfig):string {
    const { url , params} = config
    return buildURL(url, params)
}

export default axios
