const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(proxy('/apis', {
      logLevel: 'debug',
      target: "http://uss-hopper.site:8081/",
      changeOrigin: true,
    }
  ));
};