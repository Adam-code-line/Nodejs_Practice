const http = require('http')
const fs = require('fs')

const server = http.createServer((request,response) => {
    let html = fs.readFileSync(__dirname + '/02_form.html', err => {
        if(err) {
            console.log('获取失败');
            return
        }console.log('获取成功');
        
    })

    response.end(html)
    
})

server.listen(9000, () => {
    console.log('服务已经启动');
    
})