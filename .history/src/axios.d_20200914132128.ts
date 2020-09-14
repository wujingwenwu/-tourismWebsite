import * as axios from 'axios'
declare module 'axios' {
  interface AxiosResponse<T> {
    error_code: number,
    reason: string,
    result:T
  }
}