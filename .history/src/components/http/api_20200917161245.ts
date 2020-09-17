import service from './index'
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
    

}