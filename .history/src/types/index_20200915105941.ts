
export interface ResItem {
  url?: string;
  desc?: string;
  code?: string;
  created_at?: number;
  id?: number;
  isValid?: number;
  tel?: string;
  updated_at?: number;
}

export interface Res {
  total?: number,
  data?: ResItem[]
}