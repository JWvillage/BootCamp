const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware(
            '/api/member', {
                target : 'http://localhost:9001/v1/apis/PETSFINDER',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/member': '' // URL ^/api -> 공백 변경
                }
            }
        ),
        createProxyMiddleware(
            '/api/common',{
                target : 'http://localhost:9000/v1/apis/PETSFINDER',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/common': '' // URL ^/api -> 공백 변경
                }
            }
        )
    )
}