const express = require('express')

const app = express()

app.get('/home',(req,res) => {
    res.end('hello express')
})

app.get('/',(req,res) => {
    res.end('home')
})

app.post('/login',(req,res) => {
    res.end('login')
})
app.all('/login',(req,res) => {
    res.end('login')
})

app.all('/{*splat}',(req,res) => {
    res.end('404 Not Found')
})

app.listen(3000, () => {
    console.log('服务已经启动,端口3000正在监听中');
    
})