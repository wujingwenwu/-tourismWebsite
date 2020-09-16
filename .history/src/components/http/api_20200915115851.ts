import service from './index'
export default{
    //首页轮播
    getScenics(){
        return service.get(`scenics/banners`)
    },
    //获取验证码
    postCaptchas({tel}: {tel: string}){
        return service.post(`captchas`,{tel})
    },
    //注册
    postRegister({username,nickname,captcha,password}: {username: string,nickname: string,captcha: string,password}){
        return service.post(`accounts/register`,{username,nickname,captcha,password})
    }
}