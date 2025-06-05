const express = require('express')
const fs = require('fs')
const path = require('path')
const { ref } = require('process')

const app = express()

function recordMiddleware(req,res,next) {
    let{url,ip} = req
    console.log(url,ip)
    fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url} ${ip}\r\n`)

    next()
}

let checkCodeMiddleware = (req,res,next) => {
    if(req.query.code === '521') {
        next()
    }else {
        res.send('暗号错误')
    }
}

app.use(recordMiddleware)

//防盗链
app.use((req, res, next) => {
    let referer =req.get('referer')

    if(referer) {
        let url = new URL(referer)
        let hostname = url.hostname
        console.log(hostname);
        
        if(hostname !== '127.0.0.1') {
            res.status(404).send(`<h1>404 not found</h1>`)
            return
        }
    }
    next()
    
})

app.use(express.static(__dirname+'/public'))

app.get('/home',checkCodeMiddleware,(req,res) => {
    res.send('前台首页')
    
})

app.get('/admin',checkCodeMiddleware,(req,res) => {
    res.send('后台首页')
})

app.get('/setting',checkCodeMiddleware,(req,res) => {
    res.send('设置页面')
})

app.get('/{*splat}',(req,res) => {
    res.send(`<h1>404 not found</h1>`)
})

app.listen('3000',() => {
    console.log('服务已启动，端口3000正在监听中');
    
})