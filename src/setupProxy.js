const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            '/admin', {
                // pathRewrite: { '^/admin': '/admin' },//这里可以定义重写规则
                target: 'https://eveadmin.com',
                changeOrigin: true, // target是域名的话，需要这个参数，
                secure: false,
            }
        )
    );
};


// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(
//         createProxyMiddleware(
//             '/admin', {
//                 target: 'http://localhost:8086',
//                 changeOrigin: true,
//                 secure: false,
//             }
//         )
//     )
// }