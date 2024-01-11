let proxyObj = {};
proxyObj['/ws'] = {
    ws: true,
    target: "ws://39.101.172.168:8081"
};
proxyObj['/'] = {
    ws: false,
    target: 'http://39.101.172.168:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
}
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}
