module.exports = {
    devServer:{
    proxy:{
        '^/api':{
            target:'http://localhost:9090',
            ws:true,
            changeOrigin: true
        }
    }
    },
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? '/'
    //     : 'http://localhost:9090/',
    transpileDependencies: [
        'vuetify'
    ]
}
