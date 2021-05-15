module.exports = {
    pluginOptions: {
        webpackBundleAnalyzer: {
          openAnalyzer: true
        }
    },
    devServer : {
        proxy : {
            '/getApis' : {
                target : "http://localhost:3000",
                changeOrigin : true,
                pathRewrite : {
                    "^/getApis" : ""
                }
            },
            '/postApis' : {
                target : "http://localhost:3000",
                changeOrigin : true,
                pathRewrite : {
                    "^/postApis" : ""
                }
            }
        }
    }
}