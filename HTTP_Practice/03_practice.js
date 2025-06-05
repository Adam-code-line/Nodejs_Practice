const http = require('http')
const fs = require('fs')
const path = require('path')
const { log } = require('console')

let mimes = {
    html:'text/html'
}

const server = http.createServer((request,response) => {

    if(request.method !== 'GET') {
        response.statusCode = 405
        response.end(`<h1>405 Method Not Allowed</h1>`)
    }

    let {pathname} = new URL(request.url,'http://127.0.0.1')

    let root = __dirname+'/page'

    let filePath = root + pathname

    fs.readFile(filePath,(err, data) => {
        if(err) {
            response.setHeader('content-type','text/html;charset=utf-8')

            switch(err.code) {
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end(`<h1>404 not found</h1>`);
                case 'EPERM':
                    response.statusCode = 403;
                    response.end(`<h1>403 Forbidden</h1>`);
                default:
                    response.statusCode = 500;
                    response.end(`<h1>Internal Server Error</h1>`);
            }

            response.statusCode = 500
            response.end('文件读取失败')
            return
        }

        let ext = path.extname(filePath).slice(1)
        
        let type = mimes[ext]
        if(type) {

            response.setHeader('content-type',type+';charset=utf-8')

        }else {
            
            response.setHeader('content-type','application/octet-stream')

        }
        
        response.end(data)

    })
    
})

server.listen(9000, () => {
    console.log('服务已经启动,端口9000正在监听中...');
    
})