import { AxiosRequestConfig} from './types'
import xhr from './xhr.ts'
function axios(config:AxiosRequestConfig):void {
  //TODO
  xhr(config)
}

export default axios
