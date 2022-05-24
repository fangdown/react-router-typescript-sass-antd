//用于修改webpack默认配置
const {
    override,
    addWebpackAlias,
    fixBabelImports,
    addWebpackModuleRule,
    addLessLoader,
    adjustStyleLoaders,
} = require('customize-cra');
const path = require('path');
module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, //自动打包相关的样式 默认为 style:'css'
    }),
    addWebpackModuleRule({
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[local]--[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            localIdentName: '[local]__[hash:base64:5]',
        },
    }),
    // 加了这么个配置
    adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = { postcssOptions };
    })
);
