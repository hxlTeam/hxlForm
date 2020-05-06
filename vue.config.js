// node 代码
const path = require('path');
function resolve(dir) {
    console.log(dir);
    return path.join(__dirname, dir)
}

const port = 7070;
const title = 'vue项目最佳实践';

module.exports = {
    publicPath: '/kcart',
    configureWebpack: {
        devServer: {
            port, // 修改端口7070
            before(app) {
                app.get('/goods', (req, res) => {
                    res.json([
                        { id: 1, text: 'abc1' },
                        { id: 2, text: 'abc2' },
                    ])
                })
            }
        }
    },
    configureWebpack: {
        name: title // 向index.html注入标题
    },
    chainWebpack(config) {
        // 改svg默认规则：排除icons目录中svg文件处理
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({symbolId: 'icon-[name]'})
            .end();
    }
}