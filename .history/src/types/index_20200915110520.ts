
export interface ResItem {
  url? : string;
  desc? : string;
  
}

export interface Res {
  total?: number,
  data?: ResItem[],
  code? : string;
  created_at? : number;
  id? : number;
  isValid?: number;
  tel? : string;
  updated_at? : number;
}