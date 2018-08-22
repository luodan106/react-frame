const path=require('path');

module.exports={
    entry: "./index.js",
    output: {
        path:path.join(__dirname,'dist/output'),
        filename:'output.js',
        publicPath:'/dist/output/'
    },
    devServer:{
        inline:true,
        port :3333
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:'babel-loader',
                query:{
                    presets:['react','es2015','stage-1']
                },
                exclude:/node_modules/
            }
        ]
    }
}