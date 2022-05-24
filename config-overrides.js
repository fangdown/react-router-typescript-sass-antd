const webpackConfig = require('./config/webpack.config');
// console.log('webpackConfig', webpackConfig);
// const fs = require('fs');
// const file = fs.createWriteStream('./outPut.txt');

// let logger = new console.Console(file, file);
// logger.log('hello');
module.exports = {
    webpack: webpackConfig,
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.historyApiFallback = true;
            config.open = false;
            config.hot = false;
            // config.watchContentBase = false;
            config.liveReload = false;
            config.headers = {
                'Access-Control-Allow-Origin': '*',
            };
            return config;
        };
    },
};
