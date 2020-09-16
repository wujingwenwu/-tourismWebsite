import * as axios from 'axios'
declare module 'axios' {
  interface AxiosResponse<T> {
    total: number,
    data:T,
    code? : string;
  created_at? : number;
  id? : number;
  isValid?: number;
  tel? : string;
  updated_at? : number;
  }
}