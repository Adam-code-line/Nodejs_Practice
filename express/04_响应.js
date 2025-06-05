const express = require('express')

const app = express()

// app.get('/response',(req,res) => {
//     // res.statusCode = 404
//     // res.statusMessage = 'love'
//     // res.setHeader('xxx','yyy')
//     // res.write('hello express')
//     // res.end('response')
//     res.status(500)
//     res.set('aaa','bbb')
//     res.send('你好 Express')
// })

app.get('/other',(req,res) => {
    //跳转响应
    // res.redirect('http://baidu.com')
    //下载响应
    // res.download(__dirname+'/package.json')
    //json响应
    // res.json({
    //     name:'学习前端',
    //     slogon:'goodstudy daydayup'
    // })
    //响应文件内容
    res.sendFile(__dirname+'/characters.json')
})

app.listen(3000, () => {
    console.log('服务已经启动,端口3000正在监听中');
    
})