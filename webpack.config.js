// 引入包
const path=require('path')
// 引入html插件
const html=require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack的所有配置信息都卸载exports里
module.exports={
    // 指定入口文件
    entry:'./src/index.ts',

    // 指定打包文件所在的目录
    output:{
        // 指定打包目录
        path:path.resolve(__dirname,'dist'),
        // 打包后文件的名字
        filename:"bundle.js",
        // 设置兼容老版本浏览器
        environment:{
            arrowFunction:false,
        }
        
    },

    // 指定webpack打包时要用的模块
    module:{
        // 指定加载规则
        rules:[
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                // 指定用什么处理
                use:[
                    // 配置babel
                    {
                        // 指定加载器
                        loader:'babel-loader',
                        // 设置babel
                        options:{
                            // 设置预定的使用环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            'chrome':'88',
                                            'ie':'11'
                                        },
                                         // 指定corejs版本
                                         "corejs":'3',    
                                        //  使用corejs的方式,usage表示按需加载
                                         "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',

                ],
                // 要排除的文件
                exclude:/node_modules/
            },
            // 设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browser:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    
    // 配置webpack插件
    plugins:[
        new html({
            // title:'自定义title'
            template:"./src/index.html"
        }),
        // new CleanWebpackPlugin()
    ],

    // 设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}