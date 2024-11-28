import axios from "axios"
import {ElMessage} from "element-plus"
import {useTokenStore} from "@/stores/token.js"
import router from "@/router/index.js"

// const baseURL = "http://localhost:8080";
const baseURL = "/api";
const instance = axios.create({baseURL});

//添加请求拦截
instance.interceptors.request.use(
    config=>{
        const tokenStore = useTokenStore();
        if(tokenStore.token){
            config.headers['Authorization'] = tokenStore.token;
        }
        
        return config;
    },
    err=>{
        return Promise.reject(err);
    }
)

//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        //判断业务状态码
        //失败
        if(result.data.code !== 0){
            ElMessage(result.data.message ? result.data.message : "服务异常");
            return Promise.reject(result.data);
        }

        //成功
        return result.data;
    },
    err=>{
        //判断状态码, 用户是否登录
        if(err.response.status === 401){
            ElMessage("请登录");
            router.push("/login");
        }else{
            ElMessage("服务异常");
        }
        
        return Promise.reject(err);
    }
)

export default instance;