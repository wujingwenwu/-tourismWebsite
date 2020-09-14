import axios,{AxiosInstance,AxiosRequestConfig,AxiosError,AxiosResponse} from "axios"
import nprogress from "nprogress"
const service:AxiosInstance=axios.create({
    baseURL:'/api',
    timeout:10000

})
service.interceptors.request.use((config:AxiosRequestConfig):AxiosRequestConfig=>{
    nprogress.start()
    let token=localStorage.getItem("token")
    if (token) {
        // 需要在请求头当中添加token 
        config.headers['Authorization'] = "Bearer " + token
        // config.headers.Authorization = "Bearer " + token
      }
    config.headers["Auth"]=token
   return config
},(err:AxiosError)=>{
    nprogress.done()
  console.log(err);
  return Promise.reject(err)
})
service.interceptors.response.use((res:AxiosResponse):AxiosResponse=>{
    nprogress.done()
    return res.data
},(err:AxiosError )=>{
    nprogress.done()
    if(err.response && err.response.status){
        let status=err.response.status
    }
  
})
export default service