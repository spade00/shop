import axios from "axios";
// axios.defaults.timeout = 10000;//请求超时时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
const instance = axios.create({
    baseURL: '/api/shop',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

//响应拦截
// axios.interceptors.response.use(
//     response => {
//         // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
//         // 否则的话抛出错误
//         if (response.status === 200) {
//             return Promise.resolve(response);
//         } else {
//             return Promise.reject(response);
//         }
//     },
//     error => {
//         switch (error.response.status) {
//             // 401: 未登录
//             // 未登录则跳转登录页面，并携带当前页面的路径
//             // 在登录成功后返回当前页面，这一步需要在登录页操作。
//             case 401:
//                 break;
//             // 403 token过期
//             // 登录过期对用户进行提示
//             // 清除本地token和清空vuex中token对象
//             // 跳转登录页面
//             case 403:
//                 // 清除token
//                 // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//                 break;
//
//             // 404请求不存在
//             case 404:
//                 break;
//             // 其他错误，直接抛出错误提示
//             default:
//         }
//     }
// )


//请求拦截
// instance.interceptors.request.use(config=>{
//     const token = localStorage.getItem('jwt')
//     if (token){
//         config.headers.Authorization = `Bearer${token}`//将jwt token添加到请求头中
//     }
//     return config
// })

//封装方法
const request = {
    get(url, params = {}) {
        return instance.get(url, { params })//返回axios的方法
    },
    post(url, data = {}) {
        return instance.post(url, data)
    },
    put(url, data = {}) {
        return instance.put(url, data)
    },
    delete(url, params = {}) {
        return instance.delete(url, { params })
    }
}

export default request
