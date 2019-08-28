import { isPlainObject } from './util.ts'

export function transformRequest (data:any) :any {
  if(isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function tranformResponse (data:any) :any {
    if(typeof data === 'string') {
      try {
        data === JSON.parse(data)
      }catch(e) {
        //do nothing
      }
    }
    return data
}
