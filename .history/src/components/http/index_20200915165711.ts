import axios,{AxiosInstance,AxiosRequestConfig,AxiosError,AxiosResponse} from "axios"
import { message } from "ant-design-vue";
import nprogress from "nprogress"
const service: AxiosInstance=axios.create({
    baseURL: '/api',
    timeout: 10000

})
service.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig=>{
    nprogress.start()
    const token=localStorage.getItem("token")

    if(token){
        config.headers['Authorization'] =  'Bearer ' + [token]
       }
    config.headers["Auth"]=token
   return config
},(err: AxiosError)=>{
    nprogress.done()
  console.log(err);
  return Promise.reject(err)
})
service.interceptors.response.use((res: AxiosResponse): AxiosResponse=>{
    nprogress.done()
    return res.data
},(err: AxiosError )=>{
    nprogress.done()
    if (err.response && err.response.status) {
        // 错误请求的状态码
        const status = err.response.status
        if (status === 400) {
          message.error("参数错误")
        }
        if (status === 401) {
          message.error('登录过期,请重新登录')
        }
        if (status === 403) {
          message.error('没有权限')
        }
        if (status === 404) {
          message.error('接口路径错误')
        }
        if (status === 500) {
          message.error('服务器出错')
        }
        if (status === 503) {
          message.error('服务器在维护')
        }
      }
      return Promise.reject(err)
})
export default service