import service from './index'
let koken =localStorage.getItem("koken")
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
   postAirorders({users,contactName,contactPhone,invoice,air}: {users: any;contactName: string;contactPhone: string;invoice: boolean;air: number}){
  return service.post(`airorders`,{users,contactName,contactPhone,invoice,air},{
    Header:{
        
    }
  })
   },
}