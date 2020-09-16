
export interface ResItem {
  url: string;
  desc: string;
}

export interface Res {
  total: number,
  data: ResItem[],

}
export interface Ress {
  code: string;
  created_at: number;
  id: number;
  isValid: number;
  tel: string;
  updated_at: number;
}
export interface Item {
  created_at: number
  defaultAvatar: string
  email: any
  id: number
  nickname: string
  role: number
  starPosts: any
  updated_at: number
  username: string
}
