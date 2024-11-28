import request from "@/util/request.js"

//提供调用注册接口函数
export const userRegisterService = (registerData)=>{
    const params = new URLSearchParams();
    for(let key in registerData){
        params.append(key,registerData[key]);
    }
    return request.post('/user/register',params);
}

//提供调用登录接口函数
export const userLoginService = (loginData)=>{
    const params = new URLSearchParams();
    for(let key in loginData){
        params.append(key,loginData[key]);
    }
    return request.post('/user/login',params);
}

//获取用户信息
export const userInfoService = ()=>{
    return request.get('/user/userInfo');
}

//更新用户信息
export const userInfoUpdateService = (userInfo)=>{
    return request.put('/user/update',userInfo);
}

//更新头像
export const userAvatarUpdateService = (avatar)=>{
    const params = new URLSearchParams();
    params.append('avatarUrl',avatar);
    return request.patch('/user/updateAvatar',params);
}