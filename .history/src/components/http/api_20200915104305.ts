import service from './index'
export default{
    //首页轮播
    getScenics(){
        return service.get(`scenics/banners`)
    },
    postCaptchas({tel}:{tel}){
        return service.post(`captchas`,{tel})
    }
}