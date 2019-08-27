import { isPlainObject } from './util.ts'

export function transformRequest (data:any) :any {
  if(isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
