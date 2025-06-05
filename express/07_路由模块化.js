const express = require('express')
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

const app = express()

app.use(homeRouter)
app.use(adminRouter)

app.get('/{*splat}',(req,res) => {
    res.send(`<h1>404 not found</h1>`)
})

app.listen('3000',() => {
    console.log('服务已启动，端口3000正在监听中');
    
})