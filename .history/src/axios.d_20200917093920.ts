import * as axios from 'axios'
declare module 'axios' {
  interface AxiosResponse<T> {
    total: number,
    data: T,
    code: string;
    created_at: number;
    id: number;
    isValid: number;
    tel: string;
    updated_at: number;
    created_at: number
    defaultAvatar: string
    email: any
    id: number
    nickname: string
    role: number
    starPosts: any
    updated_at: number
    username: string
    city: string,
    desc: string,
    type: string,
    children: T,
    createdAt: string,
  }
}