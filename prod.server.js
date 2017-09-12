var express = require('express')
var config =require('./config/index')
var opn = require('opn')

var port = process.env.PORT || config.build.port
var autoOpenBrowser = !!config.build.autoOpenBrowser

var app = express()
var appData = require("./static/pageData.json")
var dataNews =appData.news
var dataPic =appData.pic
var dataMood =appData.mood
var dataSetting =appData.setting

var router =express.Router();
router.get('/',function(req,res,next){
  req.url = '/index.html'
  next()
})
app.use(router)

var apiRouters=express.Router();
apiRouters.get('/news',function(req,res){
  res.json(
    {
      errno:0,
      data:dataNews
    }
  )
})

apiRouters.get('/pic',function(req,res){
  res.json(
    {
      errno:0,
      data:dataPic
    }
  )
})


apiRouters.get('/mood',function(req,res){
  res.json(
    {
      errno:0,
      data:dataMood
    }
  )
})

apiRouters.get('/setting',function(req,res){
  res.json(
    {
      errno:0,
      data:dataSetting
    }
  )
})

app.use('/api',apiRouters)
app.use(express.static('./dist'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})



var server = app.listen(port,() => {
  console.log('> Starting build server...')
  //devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      //console.log('> autoOpenBrowser is '+autoOpenBrowser + '\n')
      opn(uri)
    }
    _resolve()
  //})
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
