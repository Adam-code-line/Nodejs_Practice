const express = require('express')

const app = express()

app.get('/request',(req,res) => {
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.headers);

    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);

    console.log(req.get('host'));
    
    
    
    

    res.end('hello express')
})

app.listen(3000, () => {
    console.log('服务已经启动,端口3000正在监听中');
    
})

