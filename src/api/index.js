//axios二次封装
import axios from 'axios'

//地址
axios.defaults.baseURL='http://localhost:3000'

//请求拦截器-发送请求时干的事
axios.interceptors.request.use(config=>config)

//响应拦截器-拿到响应数据干的事
axios.interceptors.response.use(
    res=>res,
    err=>Promise.reject(err)
);

//导出
export default axios