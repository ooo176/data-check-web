import axios from 'axios'

axios.interceptors.response.use(success => {
    if (success.status && success.status == 200 && success.data.status == 500) {
        return;
    }
    return success.data;
}, error => {
    if (error.response.status == 504 || error.response.status == 404) {
        console.log('服务器被吃了( ╯□╰ )')
    } else if (error.response.status == 403) {
        console.log('权限不足，请联系管理员');
    } else if (error.response.status == 401) {
        console.log('尚未登录，请登录')
    } else {
        if (error.response.data.msg) {
            console.log(error.response.data.msg)
        } else {
            console.log('未知错误!')
        }
    }
})

let base = '';
export const postKeyValueRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    })
}
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params
    })
}
