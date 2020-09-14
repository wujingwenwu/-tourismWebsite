
  export interface ResItem {

    answer: number
    explains: string
    id: number
    item1: string
    item2: string
    item3: string
    item4:string 
    question: string
    url: string
  }
  
  export interface Res {
    error_code: number,
    reason: string,
    result:ResItem[]
  }