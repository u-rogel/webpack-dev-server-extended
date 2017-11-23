var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');

module.exports = {
    devtool: 'eval',

    entry: path.join(__dirname, './src/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        inline: true,

        port: 3000,

        publicPath: '/',

        setup(app){

            app.use(bodyParser.json());
            
            app.get("/get/some-data", function(req, res){
                console.log(req);
                res.send("GET res sent from webpack dev server")
            })

            app.post("/post/some-data", bodyParser.json(), function(req, res){
                console.log(req.body);
                res.send("POST res sent from webpack dev server")
            })

        }
    }
}