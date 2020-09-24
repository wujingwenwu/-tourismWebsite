import service from './index'
const token =localStorage.getItem("token")
export default {
    //首页轮播
    getScenics() {
        return service.get(`scenics/banners`)
    },
    //获取验证码
    postCaptchas({ tel }: { tel: string }) {
        return service.post(`captchas`, { tel })
    },
    //注册
    postRegister({ username, nickname, captcha, password }: { username: string; nickname: string; captcha: string; password: string }) {
        return service.post(`accounts/register`, { username, nickname, captcha, password })
    },
    //登录
    postLogin({ username, password }: { username: string; password: string }) {
        return service.post(`accounts/login`, { username, password })
    },
    //城市菜单列表
    getPosts() {
        return service.get(`posts/cities`)
    },
    //文章列表
    getArticle({ city }: { city?: string }) {
        return service.get(`posts?city=${city}`)
    },
    //文章列表
    getArticleer() {
        return service.get(`posts`)
    },
    //文章详情
    getArticles({ id }: { id: number }) {
        return service.get(`posts?id=${id}`)
    },
    //上传文件
    getUpload({files}: {files: number}){
     return service.get(`upload?files=${files}`)
    },
    //推荐文章
    getRecommend({id}: {id: number}){
        return service.get(`posts/recommend?id=${id}`)
    },
    //提交评论
    postComments({pics,content}: {pics: any;content: string}){
    return service.post(`comments`,{pics,content})
    },
    //获取文章评论
   getComment({post,_limit,_start}: {post: number;_limit: number;_start: number}){
   return service.get(`posts/comments?post=${post}&_limit=${_limit}&_start=${_start}`)
   },
   //推荐机票
   getSale(){
       return service.get(`airs/sale`)
   },
   //机票列表
   getAirs({departCity,destCity,departDate}: {departCity: string;destCity: string;departDate: string}){
   return service.get(`airs?departCity=${departCity}&destCity=${destCity}&departDate=${departDate}`)
   },
   //提交机票订单
   postAirorders({captcha,insurances,users,contactName,contactPhone,invoice,air,seat_xid}: {users: any;contactName: string;contactPhone: string;invoice: boolean;air: number;seat_xid: string;insurances:any;captcha: string}){
  return service.post(`airorders`,{users,contactName,contactPhone,invoice,air,seat_xid,insurances,captcha},{
    headers:{
        Authorization: "Bearer " + token
    }
  })
   },
   //订单详情
   getAirorders({id}:{id: number}){
       return service.get(`airorders/${id}`,{
        headers:{
            Authorization: "Bearer " + token
        }  
       })
   },
    //.获取城市
  getcity(){
    return service.get('/posts/cities')
  },
    //7.获取城市
    getcities({name}:{name:string,}){
        return service.get(`/cities?name=${name}`)
      },
        //8.获取酒店
  gethotel({city,id,price_in,scenic,name_contains,hotellevel,hoteltype,hotelbrand,hotelasset,enterTime,person,_sort,_limit,_start}:{
    city:number,id?:number|undefined,scenic?:number|undefined,name_contains?:string|undefined,price_in?:number|undefined,hotellevel?:number|undefined,hoteltype?:number|undefined,hotelbrand?:number|undefined,hotelasset?:number|undefined,enterTime?:any,person?: number|undefined,_sort?:string|undefined,_limit?: number|undefined,_start?: number|undefined
  }) {
    return service.get(`/hotels?city=${city}&id=${id}&price_in=${price_in}&scenic=${scenic}&name_contains=${name_contains}&hotellevel=${hotellevel}&hoteltype=${hoteltype}&hotelbrand=${hotelbrand}&hotelasset=${hotelasset}&enterTime=${enterTime}&person=${person}&_sort=${_sort}&_limit=${_limit}&_start=${_start}`)
  },
  //9.获取酒店
  getHotel({city}:{
    city:number,
  }) {
    return service.get(`/hotels?city=${city}`)
  },
}