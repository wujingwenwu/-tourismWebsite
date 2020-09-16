
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
  account: {id: 5, username: "13800138000", password: "123456", email: null, role: 2, …}
banner: any
city: {id: 1, name: "北京市", code: "110100000000", parentCode: "110000000000", level: "2", …}
cityName: string,
comments: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
content: string,
created_at: number,
id: number,
images: (3) ["https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octo…ahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90", "https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png", "https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octw…ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"]
like: any,
likeIds: any,
postkind: any,
scenic: any,
summary: string,
title: string,
updated_at: number,
watch: number,
}