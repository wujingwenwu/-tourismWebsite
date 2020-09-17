
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
  defaultAvatar: string
  nickname: string
}
export interface Datas {
  data: DatasItem[],
}
export interface DatasItem {
  children: ChildrenItem[],
  type: string,
}
export interface ChildrenItem {
  city: string,
  desc: string,
}
export interface Article {
  data: ArticleItem[],
  total: number,
}
export interface ArticleItem {
  title:string,
  account:any
}