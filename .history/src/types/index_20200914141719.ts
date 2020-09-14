
  export interface ResItem {
    url: string;
 desc:string;
  }
  
  export interface Res {
    error_code: number,
    reason: string,
    result:ResItem[]
  }