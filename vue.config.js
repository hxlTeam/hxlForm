// node 代码
module.exports = {
    publicPath: '/kcart',
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/goods',(req,res)=>{
                    res.json([
                        {id:1, text: 'abc1'},
                        {id:2, text: 'abc2'},
                    ])
                })
            }
        }
    }
}