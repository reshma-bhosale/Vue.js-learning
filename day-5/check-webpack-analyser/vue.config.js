module.exports ={
    devServer : {
        proxy : {
                "/getApis" : {
                    target : "http://localhost:3000",
                    changeOrigin : true,
                    pathRewrite : {
                        "^/getAPis" : ""
                    }
                },
                "/postApis" : {
                    target : "http://localhost:3000",
                    changeOrigin : true,
                    pathRewrite : {
                        "^postApis" : ""
                    }
                }
        }
    },
    pluginOptions: {
        webpackBundleAnalyzer: {
          openAnalyzer: true
        }
    }
}